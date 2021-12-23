import React from "react";
import { FaArrowRight } from "react-icons/fa";
import fastDelivery from "../img/Image/fastDelivery.png";
import AutoResponder from "../img/Image/AutoResponder.png";
import HomeDelivery from "../img/Image/HomeDelivery.png";
import DeleveryIcon1 from "../img/icons/DeleveryIcon1.png";
import DeleveryIcon2 from "../img/icons/DeleveryIcon2.png";
import DeleveryIcon3 from "../img/icons/DeleveryIcon3.png";
import "../styles/components/ChooseDelivery.css";

const ChooseDelivery = () => {
  return (
    <div className="deliveryContainer">
      <h1>Why you choose us</h1>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text.{" "}
        <br /> It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old.{" "}
      </p>

      <div className="deliveryRow">
        <div className="deliveryCart">
          <img src={fastDelivery} alt="" />
          <div className="deliveryCol">
            <div className="deliveryIcon">
              <img src={DeleveryIcon3} alt="" />
            </div>

            <div className="deliveryContent">
              <h3>Fast delivery</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </p>
              <a href="/">
                See more
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>

        <div className="deliveryCart">
          <img src={AutoResponder} alt="" />
          <div className="deliveryCol">
            <div className="deliveryIcon">
              <img src={DeleveryIcon2} alt="" />
            </div>
            <div className="deliveryContent">
              <h3>A Good Auto Responder</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </p>
              <a href="/">
                See more <FaArrowRight />
              </a>
            </div>
          </div>
        </div>

        <div className="deliveryCart">
          <img src={HomeDelivery} alt="" />
          <div className="deliveryCol">
            <div className="deliveryIcon">
              <img src={DeleveryIcon1} alt="" />
            </div>

            <div className="deliveryContent">
              <h3>Home Delevery</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </p>
              <a href="/">
                See more
                <span>
                  <FaArrowRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseDelivery;
