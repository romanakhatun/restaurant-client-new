import React from "react";
import Auth from "../utils/useAuth";
import { Link } from "react-router-dom";

const CheckoutBtn = () => {
  const auth = Auth();

  return (
    <div className="CheckOutBtn">
      <Link to="/cart">
        <button className={auth.user ? "btn btnFull" : "btn btnMuted"}>
          Checkout your food
        </button>
      </Link>
    </div>
  );
};

export default CheckoutBtn;
