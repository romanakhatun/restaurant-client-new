import React from 'react';
import deleveryMan from '../../img/Image/delevery-man.png';
import img1 from '../../img/Image/img1.png';
import map from '../../img/Image/map.png'
import './LocationMap.css'
const LocationMap = () => {
    return (
        <div className="lacationContainer">
            <div className="map">
                <img src={map} alt="" />
            </div>

            <div className="locationPart">
                <div className="deliveryImg">
                    <img src={deleveryMan} alt="" />
                </div>
                <div className="locationAddress">
                    <div className="location">
                        <h2>Your Location</h2>
                        <p>107 Rd No 8</p>
                    </div>
                    <div className="address">
                        <h2>Shop Address</h2>
                        <p>Gulshan Plaza Restaura GPR</p>
                    </div>
                </div>

                <div className="deleveryTime">
                    <h1>09:30</h1>
                    <p>Estimated dalivery time</p>
                </div>

                <div className="deleveryRadier">
                    <div className="raiderImg">
                        <img src={img1} alt="" />
                    </div>
                    <div className="raiderContent">
                        <h2>Hamim</h2>
                        <p>Your raider</p>
                    </div>
                </div>

                <button className="contactBtn">Contact</button>
            </div>
        </div>
    );
};

export default LocationMap;