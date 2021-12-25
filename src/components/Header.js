import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo2 from "../img/logo/logo2.png";
import Auth from "../utils/useAuth";
import "../styles/components/Header.css";

const Header = () => {
  const auth = Auth();

  const signOutBtn = () => {
    auth.SIGNOUT().then((res) => {
      window.location.pathname = "/";
    });
  };

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
              <button onClick={signOutBtn}>signOutBtn</button>
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
