import React from 'react';
import fastDelivery from '../../img/Image/fastDelivery.png';
import AutoResponder from '../../img/Image/AutoResponder.png';
import HomeDelevery from '../../img/Image/HomeDelevery.png';
import DeleveryIcon1 from '../../img/icons/DeleveryIcon1.png';
import DeleveryIcon2 from '../../img/icons/DeleveryIcon2.png';
import DeleveryIcon3 from '../../img/icons/DeleveryIcon3.png';
import './ChooseDelivery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ChooseDelivery = () => {
    return (
        <div className="deliveryContainer">
            <h1>Why you choose us</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. <br /> It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>

            <div className="deleveryRow">

                {/* Delevery cart1 */}
                <div className="deliveryCart">
                    <img src={fastDelivery} alt="" />
                    <div className="deleveryCol">
                        <div className="deleveryIcon">
                            <img src={DeleveryIcon3} alt="" />
                        </div>

                        <div className="deleveryContent">
                            <h3>Fast Delevery</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                            <a href="/">See more <FontAwesomeIcon icon={faArrowRight} /> </a>
                        </div>
                    </div>
                </div>

                {/* Delevery cart2 */}
                <div className="deliveryCart">
                    <img src={AutoResponder} alt="" />
                    <div className="deleveryCol">
                        <div className="deleveryIcon">
                            <img src={DeleveryIcon2} alt="" />
                        </div>
                        <div className="deleveryContent">
                            <h3>A Good Auto Responder</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                            <a href="/">See more <FontAwesomeIcon icon={faArrowRight} /></a>
                        </div>
                    </div>
                </div>

                {/* Delevery cart3 */}
                <div className="deliveryCart">
                    <img src={HomeDelevery} alt="" />
                    <div className="deleveryCol">
                        <div className="deleveryIcon">
                            <img src={DeleveryIcon1} alt="" />
                        </div>

                        <div className="deleveryContent">
                            <h3>Home Delevery</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                            <a href="/">See more <span><FontAwesomeIcon icon={faArrowRight} /></span></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChooseDelivery;