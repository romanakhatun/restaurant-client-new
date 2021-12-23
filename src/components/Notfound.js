import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Notfound.css";

const Notfound = () => {
  return (
    <div className="notFound">
      <h1>Page Not Found !!!</h1>
      <h2>404 Error</h2>
      <p>
        Go to home page
        <Link to="/"> Home</Link>
      </p>
    </div>
  );
};

export default Notfound;
