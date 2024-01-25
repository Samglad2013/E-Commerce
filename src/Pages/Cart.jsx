import React from "react";
import CartItems from "../Component/CartItems/CartItems";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  const isCartEmpty = Object.values(cartItems).every(
    (quantity) => quantity === 0
  );

  return <div>{isCartEmpty ? <p>Your cart is empty</p> : <CartItems />}</div>;
};

export default Cart;
