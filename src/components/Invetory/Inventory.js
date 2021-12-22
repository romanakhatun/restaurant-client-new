import React from "react";
// import foodsData from '../../foodsData';
import "./Inventory.css";
import imgForm from "../../img/form-img.jpg";

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
    <div style={{ textAlign: "center", padding: "50px 0" }}>
      <div className="inventoryForm" style={{}}>
        <div className="formImg">
          <img src={imgForm} alt="" />
        </div>

        <div className="fullForm ">
          <select name="cat" id="cat">
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
          <br />
          <input type="text" class="input" id="key" placeholder="Food key" />
          <br />
          <input
            type="text"
            class="input"
            id="title"
            placeholder="Food title"
          />
          <br />
          <input
            type="number"
            class="input"
            id="price"
            placeholder="Food price"
          />
          <br />
          <input
            type="text"
            class="input"
            id="shortDisc"
            placeholder="Food short description"
          />
          <br />
          <input
            type="text"
            class="input"
            id="longDisc"
            placeholder="Food long description"
          />
          <br />
          <input
            type="text"
            class="input"
            id="img"
            placeholder="Food img url"
          />
          <br />
          <br />
          <button class="inventoryBtn" id="addFood" onClick={btnAddFood}>
            Add Food
          </button>
        </div>
      </div>

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
