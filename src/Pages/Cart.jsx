import React, {useContext} from "react";
import CartItems from "../Component/CartItems/CartItems";
import { ShopContext } from "../Context/ShopContext";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  const isCartEmpty = Object.values(cartItems).every(
    (quantity) => quantity === 0
  );

  return <div>{isCartEmpty ? <p className="cart-alert center">Your cart is empty</p> : <CartItems />}</div>;
};

export default Cart;
