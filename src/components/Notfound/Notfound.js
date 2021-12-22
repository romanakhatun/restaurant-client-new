import React from 'react';
import './Notfound.css'

const Notfound = () => {
    return (
        <div className="notFound">
            <h1>Page Not Found !!!</h1>
            <h2>404 Error</h2>
            <p>Go to home page <a className="link" href="/">Home</a></p>
        </div>
    );
};

export default Notfound;