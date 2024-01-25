import React from "react";
import "./ShopData.css";
import hand_icon from "../Assest/hand_icon.png";
import arrow from "../Assest/arrow.png";
import hero_image from "../Assest/hero_image.png";

const ShopData = () => {
  return (
    <div className="container">
      <div className="info">
        <div className="info-left">
          <h2>New Arrivals Only</h2>
          <div className="info-left-icon">
            <p>
              new
              <span>
                <img className="hand_icon" src={hand_icon} alt="" />
              </span>
            </p>

            <p>collections</p>
            <p>for everyone</p>
          </div>
          <div className="info-latest-collection">
            <button>
              latest Collections{" "}
              <span>
                <img src={arrow} alt=""></img>
              </span>
            </button>
          </div>
        </div>

        <div className="info-right">
          <img src={hero_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ShopData;
