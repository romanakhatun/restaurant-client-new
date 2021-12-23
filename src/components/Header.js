import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import logo2 from "../img/logo/logo2.png";
import Auth from "../utils/useAuth";

const Header = () => {
  const auth = Auth();

  const signOutBtn = () => {
    auth.signOut().then((res) => {
      window.location.pathname = "/";
    });
  };

  return (
    <header className="header">
      <div className="headerContainer">
        <a href="/" className="headerLogo">
          <img src={logo2} alt="" />
        </a>

        <div className="headerNav">
          <a href="/cart">
            <FiShoppingCart />
          </a>
          {auth.user ? (
            <>
              <span className="userInfo">
                <h3>{auth.user.name}</h3>
                <img src={auth.user.photo} alt="User Pic" />
                <button onClick={signOutBtn} className="btn btnFull">
                  Sign Out
                </button>
              </span>
              <button className="btn btnFull inventory">
                <a href="/inventory">Inventory</a>
              </button>
            </>
          ) : (
            <a href="/login" className="btn btnFull">
              Sign Up
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
