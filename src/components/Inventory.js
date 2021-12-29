import { Container } from "@material-ui/core";
import React from "react";
import "../styles/components/Inventory.css";

const Inventory = () => {
  // Post data to the server
  const btnAddFood = () => {
    const cat = document.getElementById("cat").value;
    const key = document.getElementById("key").value;
    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const shortDisc = document.getElementById("shortDisc").value;
    const longDisc = document.getElementById("longDisc").value;
    const img = document.getElementById("img").value;
    const food = { cat, key, title, price, shortDisc, longDisc, img };

    // post
    fetch("https://red-onion-restaurant-romana.herokuapp.com/addFood", {
      method: "POST",
      body: JSON.stringify(food),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Clean input
        document.getElementById("cat").value = "";
        document.getElementById("key").value = "";
        document.getElementById("title").value = "";
        document.getElementById("price").value = "";
        document.getElementById("shortDisc").value = "";
        document.getElementById("longDisc").value = "";
        document.getElementById("img").value = "";

        // Success Message
        const successMsg = document.getElementById("successMsg");
        successMsg.style.display = "block";
        setTimeout(() => {
          successMsg.style.display = "none";
        }, 3000);
      });
  };

  return (
    <div className="inventory">
      <Container>
        <div className="fullForm ">
          <select name="cat" id="cat">
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
          <input
            type="text"
            className="input"
            id="key"
            placeholder="Food key"
          />
          <input
            type="text"
            className="input"
            id="title"
            placeholder="Food title"
          />
          <input
            type="number"
            className="input"
            id="price"
            placeholder="Food price"
          />
          <input
            type="text"
            className="input"
            id="img"
            placeholder="Food img url"
          />
          <input
            type="text"
            className="input"
            id="shortDisc"
            placeholder="Food short description"
          />
          <input
            type="text"
            className="input"
            id="longDisc"
            placeholder="Food long description"
          />

          <button className="btn btnFull inventoryBtn" onClick={btnAddFood}>
            Add Food
          </button>
        </div>
      </Container>

      <p
        id="successMsg"
        style={{ color: "green", display: "none", marginTop: "10px" }}
      >
        Food added successfully
      </p>
    </div>
  );
};

export default Inventory;
