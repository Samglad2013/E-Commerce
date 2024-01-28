import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
      <div className="item">
        <div className="image">
          <Link to={`/product/${props.id}`}>
            <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
          </Link>
        </div>
        <p className="item-name">{props.name}</p>
        <div className="item-prices">
          <div className="old_price">
            <p className="price">${props.old_price}</p>
          </div>
          <div className="new_price">
            <p className="price">${props.new_price}</p>
          </div>
        </div>
      </div>
  );
};

export default Item;
