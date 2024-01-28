import React from "react";
import exclusive_image from "../Assest/exclusive_image.png";
const Offers = () => {
  return (
    <div className="container">
      <div className="offers">
        <div className="offers-left">
          <h1 >Exclusive</h1>
          <h1 >Offers for you</h1>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <div>
            <button>check now</button>
          </div>
        </div>
        <div className="offers-right">
          <img src={exclusive_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
