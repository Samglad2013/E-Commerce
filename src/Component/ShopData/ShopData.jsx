import React from "react";
import hand_icon from "../Assest/hand_icon.png";
import arrow from "../Assest/arrow.png";
import hero_image from "../Assest/hero_image.png";

const ShopData = () => {
  return (
    <div className="container">
      <div className="info">
        <div className="info-left">
          <h2 className="p-1">New Arrivals Only</h2>
          <div className="info-left-icon">
            <p className="p-1">
              new
              <span>
                <img className="hand_icon" src={hand_icon} alt="" />
              </span>
            </p>

            <p className="p-1">collections</p>
            <p className="p-1"> for everyone</p>
          </div>
          <div className="info-latest-collection p-1" >
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
