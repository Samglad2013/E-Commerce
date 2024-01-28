import React, { useContext } from "react";
import star_icon from "../Assest/star_icon.png";
import star_dull_icon from "../Assest/star_dull_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props) => {
  const { addToCart } = useContext(ShopContext);
  const { image, name, old_price, new_price, description, id } = props.product;
  return (
    <div className="container">
      <div className="product-display">
        <div className="product-display-left">
          <div className="img-list">
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
          </div>
          <div className="product-display-img-main">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="product-display-right">
          <h1>{name}</h1>

          <div className="product-display-right-icons">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="product-display-right-prices">
            <div className="old_price">
              <p>${old_price}</p>
            </div>
            <div className="new_price">
              <p>${new_price}</p>
            </div>
          </div>
          <div className="product-display-right-desc">{description}</div>
          <div className="product-display-right-option">
            <h3>Select size</h3>
          </div>
          <div className="product-display-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>Xl</div>
            <div>XXL</div>
          </div>
          <Link to="/cart">
            <button
              onClick={() => {
                addToCart(id);
              }}
            >
              Add To Cart
            </button>
          </Link>

          <p className="product-display-right-category">
            <span>Category:</span> women, t-shirt, crop-top
          </p>
          <p className="product-display-right-tag">
            <span>Tag:</span> Modern, Latest design
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
