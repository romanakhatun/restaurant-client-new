import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import icon1 from "../img/icon1.png";
import icon2 from "../img/icon2.png";
import icon3 from "../img/icon3.png";
import fastDelivery from "../img/fastDelivery.png";
import AutoResponder from "../img/AutoResponder.png";
import HomeDelivery from "../img/HomeDelivery.png";
import "../styles/components/ChooseDelivery.css";

const ChooseDelivery = () => {
  return (
    <Container className="delivery">
      <h1>Why you choose us</h1>
      <p>
        Barton waited twenty always repair in within we do.An delighted
        offending <br /> curiosity my dashwoods at. Boy prosperous increasing
        surrounded
      </p>

      <div className="deliveryRow">
        <div className="deliveryCart">
          <img
            className="deliveryPicture"
            src={fastDelivery}
            alt="fastDelivery"
          />
          <img className="deliveryIcon" src={icon1} alt="icon1" />
          <h3>Fast delivery</h3>
          <p>
            keep your systems in sync with automated web hook based
            notifications each time link in paid and how we dream about our
            future
          </p>
          <Link to="/">
            See more
            <FaArrowRight />
          </Link>
        </div>

        <div className="deliveryCart">
          <img
            className="deliveryPicture"
            src={AutoResponder}
            alt="AutoResponder"
          />
          <img className="deliveryIcon" src={icon2} alt="icon2" />
          <h3>A Good Auto Responder</h3>
          <p>
            keep your systems in sync with automated web hook based
            notifications each time link in paid and how we dream about our
            future
          </p>
          <Link to="/">
            See more
            <FaArrowRight />
          </Link>
        </div>

        <div className="deliveryCart">
          <img
            className="deliveryPicture"
            src={HomeDelivery}
            alt="HomeDelivery"
          />
          <img className="deliveryIcon" src={icon3} alt="icon3" />
          <h3>A Good Auto Responder</h3>
          <p>
            keep your systems in sync with automated web hook based
            notifications each time link in paid and how we dream about our
            future
          </p>
          <Link to="/">
            See more
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ChooseDelivery;
