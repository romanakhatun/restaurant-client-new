import React from "react";
import "../styles/components/HomeHero.css";

const HomeHero = () => {
  return (
    <div className="homeHero">
      <h1>Best food waiting for your belly</h1>
      <div className="heroSearch">
        <input
          className="searchInput"
          type="text"
          placeholder="Search food items"
        />
        <button className="submit">Submit</button>
      </div>
    </div>
  );
};

export default HomeHero;
