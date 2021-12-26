import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo2 from "../img/logo/logo2.png";
import Auth from "../utils/useAuth";
import "../styles/components/Header.css";

const Header = () => {
  const auth = Auth();

  return (
    <header className="header">
      <div className="headerContainer">
        <Link to="/" className="headerLogo">
          <img src={logo2} alt="" />
        </Link>

        <div className="headerNav">
          <Link to="/cart">
            <FiShoppingCart />
          </Link>
          {auth.user ? (
            <>
              <Link to="/inventory">Inventory</Link>
              <Link to="/profile">Profile</Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register" className="btn btnSignUp">
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
