import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Breakfast = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://red-onion-restaurant-romana.herokuapp.com/foods")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);

  const breakfastFoods = foods.filter((food) => food.cat === "breakfast");
  return (
    <>
      {breakfastFoods.length > 0 ? null : <p className="loading">Loading...</p>}
      <div className="foodItems">
        {breakfastFoods.map((food) => (
          <div className="foodItem" key={food.key}>
            <Link to={"/food/" + food.key}>
              <img src={food.img} alt="food" />
            </Link>
            <h3>
              <Link to={"/food/" + food.key} className="foodTitle">
                {food.title}
              </Link>
            </h3>
            <p className="foodShortDisc">{food.shortDisc}</p>
            <h2 className="foodPrice">${food.price}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Breakfast;
