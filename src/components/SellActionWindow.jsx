import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContextS from "./GeneralContextS";

import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  console.log("hii i am sell action window")

  const handleSellClick = () => {
    axios.post("https://backend-dcj7.onrender.com/removeOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
    });

    GeneralContextS.closeSellWindow();
  };

  const handleCancelClick = () => {
    GeneralContextS.closeSellWindow();
  };

  return (
    <div style={{height:"40px",width:"60px"}}className="container" id="buy-window" draggable="true">
      {/* <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div> */}

      <div className="buttons">
        {/* <span>Margin required ₹140.65</span> */}
        <div>
          <Link className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;


