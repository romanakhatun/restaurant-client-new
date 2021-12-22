import React from 'react';
import logo from '../../img/logo/logo.png';
import './Footer.css'
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
                    <p>Sign up to delevery</p>
                    <p>Add your restaurent</p>
                </div>
                <div className="fLastContent">
                    <p>Get help</p>
                    <p>Read FAQS</p>
                    <p>Veiw all cities</p>
                    <p>Restaurent near me</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;