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
          <a href="/cart">
            <FiShoppingCart />
          </a>
          {auth.user ? (
            <>
              <Link to="/inventory">Inventory</Link>
              <Link to="/profile">Profile</Link>
            </>
          ) : (
            <Link to="/login" className="btn btnFull">
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
