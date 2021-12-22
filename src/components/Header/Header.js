import React from 'react';
import logo2 from '../../img/logo/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Auth from '../SignUpIn/useAuth';

const Header = () => {
    const auth = Auth();

    const signOutBtn = () => {
        auth.signOut().then(res => {
            window.location.pathname = "/"
        });
    }

    return (
        <header className="header">
            <div className="headerContainer">
                <a href="/" className="headerLogo">
                    <img src={logo2} alt="" />
                </a>

                <div className="headerNav">
                    <a href="/cart"> <FontAwesomeIcon icon={faShoppingCart} /></a>
                    {
                        auth.user ? <span className="userInfo">
                            <h3>{auth.user.name}</h3>
                            <img src={auth.user.photo} alt="User Pic" />
                            <button onClick={signOutBtn} className="btn btnFull">Sign Out</button>
                        </span> : <a href="/login" className="btn btnFull">Sign Up</a>
                    }
                    <button className="btn btnFull inventory">
                        <a href="/inventory">Inventory</a>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;