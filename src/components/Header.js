import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo2 from "../img/logo/logo2.png";
import Auth from "../utils/useAuth";
import "../styles/components/Header.css";

const Header = () => {
  const auth = Auth();
  const [navbarActive, setNavbarActive] = useState(false);

  const navbarActiveBgDesign = () => {
    if (window.scrollY >= 80) {
      setNavbarActive(true);
    } else {
      setNavbarActive(false);
    }
  };

  window.addEventListener("scroll", navbarActiveBgDesign);

  return (
    <header
      id="headerCommon"
      className={navbarActive ? "headerActive" : "header"}
    >
      <div className="headerContainer">
        <Link to="/" className="headerLogo">
          <img src={logo2} alt="logo" />
        </Link>

        <div className="navbar">
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
