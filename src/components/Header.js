import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
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

        <input type="checkbox" className="navbarCheckbox" id="navToggle" />
        <label htmlFor="navToggle" className="navbarButton">
          <div className="navbarIcons">
            <GiHamburgerMenu />
            {/* <GrFormClose /> */}
          </div>
        </label>

        <div className="navbarMenu">
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
