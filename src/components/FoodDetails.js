import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiPlus, FiMinus, FiShoppingCart } from "react-icons/fi";
import { addToDatabaseCart } from "../utils/databaseManager";
import "../styles/components/FoodDetails.css";

const FoodDetails = () => {
  const { foodKey } = useParams();
  const [food, setFood] = useState(null);

  useEffect(() => {
    fetch("https://red-onion-restaurant-romana.herokuapp.com/foods/" + foodKey)
      .then((res) => res.json())
      .then((data) => {
        setFood(data);
      });
  }, [foodKey]);

  //increase decrease handle
  let [count, setCount] = useState(1);
  const increaseHandle = () => {
    setCount(count + 1);
  };
  const DecreaseHandle = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const totalPrice = food && food.price * count;
  let cartCount = count;

  // Cart
  const [cart, setCart] = useState([]);
  const addFoodToCart = (food) => {
    const toBeAddedKey = food.key;
    const sameFood = cart.find((foo) => foo.key === toBeAddedKey);

    let count = cartCount;
    let newCart;
    if (sameFood) {
      count = sameFood.quantity + 1;
      sameFood.quantity = count;

      const othersFood = cart.filter((prod) => prod.key !== toBeAddedKey);
      newCart = [...othersFood, sameFood];
    } else {
      food.quantity = 1;
      newCart = [...cart, food];
    }

    setCart(newCart);
    addToDatabaseCart(food.key, count);
  };

  return (
    <>
      {food && (
        <div className="foodDetail">
          <div className="fDetailsContent">
            <h1 className="category">{food.title}</h1>
            <p className="foodLongDisc">{food.longDisc}</p>

            <div className="priceContainer">
              <h2 className="rice">${totalPrice.toFixed(2)}</h2>

              <div className="incDec">
                <button>
                  <span onClick={DecreaseHandle}>
                    <FiMinus />
                  </span>
                  <span>{count}</span>
                  <span className="plusIcon" onClick={increaseHandle}>
                    <FiPlus />
                  </span>
                </button>
              </div>
            </div>

            <br />
            <br />
            <button className="btn btnFull" onClick={() => addFoodToCart(food)}>
              <span>
                <FiShoppingCart />
              </span>
              Add
            </button>
          </div>

          <div className="detailImg">
            <img src={food.img} alt="food" />
          </div>
        </div>
      )}
    </>
  );
};

export default FoodDetails;
