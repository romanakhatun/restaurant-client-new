import { Container } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo/logo.png";
import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footerContainer">
        <div className="footerLogo">
          <img src={logo} alt="footerLogo" />
        </div>

        <div className="footerMiddleContent">
          <p>About online food</p>
          <p>Read our blog</p>
          <p>Sign up to delivery</p>
          <p>Add your restaurant</p>
        </div>

        <div className="footerLastContent">
          <p>Get help</p>
          <p>Read FAQS</p>
          <p>View all cities</p>
          <p>Restaurant near me</p>
        </div>
      </Container>

      <p>
        Developed by{" "}
        <a
          target="_blank"
          href="https://romana-khatun.web.app"
          rel="noreferrer"
        >
          Romana Khatun
        </a>{" "}
      </p>
    </footer>
  );
};

export default Footer;
