import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assest/cart_cross_icon.png";

const CartItems = () => {
  const { getCartTotal, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="container">
      <div className="cartItems">
        <div className="cart-items-main">
          <p>Product</p>
          <p>name</p>
          <p>price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id} className="cart-items-format cart-items-main">
                <img className="item-image" src={e.image} alt={e.name} />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cart-items-button">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  alt=""
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="cart-items-bottom">
        <div className="cart-items-total">
          <h2>Cart Total</h2>
          <div className="total sub-total">
            <p>Subtotal</p>
            <p>${getCartTotal()}</p>
          </div>
          <hr />
          <div className=" total shipping-details">
            <p>Shipping fee</p>
            <p>free</p>
          </div>
          <hr />
          <div className="total item-total">
            <h3>total</h3>
            <h3>${getCartTotal()}</h3>
          </div>
          <hr />
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="promo">
          <p>if you have a promo code enter it here</p>
          <span>
            <input placeholder="promo code"></input>
            <button>Submit</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
