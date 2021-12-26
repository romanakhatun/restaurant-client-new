import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
  addToDatabaseCart,
  processOrder,
} from "../utils/databaseManager";
import Auth from "../utils/useAuth";
import CheckoutForm from "./CheckoutForm";
import "../styles/components/Cart.css";

const Cart = () => {
  const auth = Auth();
  const [cart, setCart] = useState([]);
  console.log(auth.user);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    delete savedCart.undefined;
    const foodKeys = Object.keys(savedCart);

    fetch("https://red-onion-restaurant-romana.herokuapp.com/getFoodsByKey", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodKeys),
    })
      .then((res) => res.json())
      .then((data) => {
        const cartFoods = foodKeys.map((key) => {
          const food = data.find((food) => food.key === key);
          food.quantity = savedCart[key];
          return food;
        });
        setCart(cartFoods);
      });
  }, []);

  // Remove product from cart when "Remove" btn clicked
  const removeProduct = (productKey) => {
    const newCart = cart.filter((prod) => prod.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  //increase decrease handle
  const increaseHandle = (food) => {
    let count = food.quantity + 1;
    addToDatabaseCart(food.key, count);
    window.location.reload();
  };

  const decreaseHandle = (food) => {
    let count = food.quantity - 1;
    if (count >= 1) {
      addToDatabaseCart(food.key, count);
      window.location.reload();
    }
  };

  // Total
  let subTotal = 0;
  cart.map((food) => (subTotal = subTotal + food.price * food.quantity));
  let tax = subTotal * 0.05;
  let deliveryChr = 5;
  let totalCost = subTotal + tax + deliveryChr;

  // Form
  const { register, handleSubmit, errors } = useForm();
  const [shipInfo, setShipInfo] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const stripePromise = loadStripe(
    "pk_test_KnoYbUJbjc65tHtBWXYBW6fg006ohxzAIH"
  );

  const onSubmit = (data) => {
    setShipInfo(data);
  };

  const handlePlaceOrder = (payment) => {
    //  move this after payment
    const savedCart = getDatabaseCart();
    const orderDetails = {
      email: auth.user.email,
      cart: savedCart,
      shipment: shipInfo,
      payment: payment,
    };

    fetch("https://red-onion-restaurant-romana.herokuapp.com/placeOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((order) => {
        setOrderId(order._id);
        processOrder();
      });
  };

  return (
    <div className="cartPage">
      <div className="deliveryDetails">
        <div
          className="shipForm"
          style={{ display: shipInfo ? "none" : "block" }}
        >
          <h2>Shipment Information</h2>
          {auth.user ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                name="name"
                className="input"
                defaultValue={auth.user.name}
                ref={register({ required: true })}
                placeholder="Name"
              />
              {errors.name && <span className="error">Name is required</span>}
              <input
                name="email"
                className="input"
                defaultValue={auth.user.email}
                ref={register({ required: true })}
                placeholder="E-mail"
              />
              {errors.email && (
                <span className="error">E-mail is required</span>
              )}
              <input
                name="phone"
                className="input"
                ref={register({ required: true })}
                placeholder="Phone number"
              />
              {errors.phone && (
                <span className="error">Phone number is required</span>
              )}
              <input
                name="addressLine1"
                className="input"
                ref={register({ required: true })}
                placeholder="Address Line 1"
              />
              {errors.addressLine1 && (
                <span className="error">Address is required</span>
              )}
              <input
                name="addressLine2"
                className="input"
                ref={register({ required: true })}
                placeholder="Address Line 2"
              />
              <input
                name="city"
                className="input"
                ref={register({ required: true })}
                placeholder="City"
              />
              {errors.city && (
                <span className="error">City Code is required</span>
              )}
              <input
                name="zipCode"
                className="input"
                ref={register({ required: true })}
                placeholder="Zip Code"
              />
              {errors.zipCode && (
                <span className="error">Zip Code is required</span>
              )}
              <input
                name="country"
                className="input"
                ref={register({ required: true })}
                placeholder="Country"
              />
              {errors.country && (
                <span className="error">Country is required</span>
              )}
              <br />
              <input
                type="submit"
                value="Save & Continue"
                className="btn btnFull"
              />
            </form>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div
          className="paymentInfo"
          style={{ display: shipInfo ? "block" : "none" }}
        >
          <h2>Payment Information</h2>
          <Elements stripe={stripePromise}>
            <CheckoutForm handlePlaceOrder={handlePlaceOrder}></CheckoutForm>
          </Elements>
          <br />
          {orderId && (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <h3 style={{ color: "green" }}>Thank you for shopping with us</h3>
              <p>Your order id is {orderId}</p>
            </div>
          )}
        </div>
      </div>

      <div className="cartDetails">
        <div className="cartAddress">
          <h4>
            <span>From</span> Gulshan Plaza Restaurant GPR
          </h4>
          <p>Arriving in 20-30 min</p>
          <p className="road">107 Rd no 8</p>
        </div>

        <div className="cartItems">
          {cart.map((food) => {
            return (
              <div className="cartItem" key={food.key}>
                <button
                  className="removeIcon"
                  onClick={() => removeProduct(food.key)}
                >
                  <FaTimes />
                </button>

                <div className="img">
                  <img src={food.img} alt="Cart" />
                </div>
                <div className="details">
                  <h5>
                    {food.title}{" "}
                    <span style={{ fontSize: "14px" }}>(${food.price})</span>
                  </h5>
                  <p className="price">
                    ${(food.price * food.quantity).toFixed(2)}
                  </p>
                  <small className="deliveryFee">delivery charge free</small>
                </div>
                <div className="incDec">
                  <button>
                    <span onClick={() => decreaseHandle(food)}>
                      <FiMinus />
                    </span>
                    <span>{food.quantity}</span>
                    <span
                      className="plusIcon"
                      onClick={() => increaseHandle(food)}
                    >
                      <FiPlus />
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="shoppingCost">
          <div>
            <p>Subtotal. {cart.length} items</p>
            <p>${subTotal.toFixed(2)}</p>
          </div>
          <div>
            <p>Tax 5%</p>
            <p>${tax.toFixed(2)}</p>
          </div>
          <div>
            <p>Delivery charge</p>
            <p>${deliveryChr.toFixed(2)}</p>
          </div>
          <div className="totalCost">
            <p>Total</p>
            <p>${totalCost.toFixed(2)}</p>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <Link to="/checkout">
            {auth.user ? (
              <button className="btn btnFull">Place Order</button>
            ) : (
              <button className="btn btnMuted">Place Order</button>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
