import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/FoodCorner.css";

const FoodCorner = () => {
  return (
    <div className="foodCorner">
      <div className="foodMenu">
        <ul>
          <li>
            <NavLink exact to="/breakfast">
              Breakfast
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/">
              Lunch
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/dinner">
              Dinner
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FoodCorner;
