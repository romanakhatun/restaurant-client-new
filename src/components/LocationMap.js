import React from "react";
import { Container } from "@material-ui/core";
import deliveryMan from "../img/delivery-man.png";
import raider from "../img/raider.png";
import map from "../img/map.png";
import "../styles/components/LocationMap.css";

const LocationMap = () => {
  return (
    <Container>
      <div className="locationMap">
        <div className="map">
          <img src={map} alt="map" />
        </div>

        <div className="location">
          <div className="deliveryImg">
            <img src={deliveryMan} alt="" />
          </div>
          <div className="locationAddress">
            <div className="location">
              <h2>Your Location</h2>
              <p>107 Rd No 8</p>
            </div>
            <div className="address">
              <h2>Shop Address</h2>
              <p>Gulshan Plaza Restaurant GPR</p>
            </div>
          </div>

          <div className="deliveryTime">
            <h1>09:30</h1>
            <p>Estimated delivery time</p>
          </div>

          <div className="deliveryRaider">
            <div className="raiderImg">
              <img src={raider} alt="raider" />
            </div>
            <div className="raiderContent">
              <h2>Hamim</h2>
              <p>Your raider</p>
            </div>
          </div>

          <button className="contactBtn">Contact</button>
        </div>
      </div>
    </Container>
  );
};

export default LocationMap;
