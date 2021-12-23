import React from "react";
import logo from "../img/logo/logo.png";
import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footerLogo">
          <img src={logo} alt="" />
        </div>
        <div className="fMidleContent">
          <p>About online food</p>
          <p>Read our blog</p>
          <p>Sign up to delivery</p>
          <p>Add your restaurant</p>
        </div>
        <div className="fLastContent">
          <p>Get help</p>
          <p>Read FAQS</p>
          <p>View all cities</p>
          <p>Restaurant near me</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
