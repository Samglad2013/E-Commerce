import React, { createContext, useState } from "react";
import all_product from "../Component/Assest/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let Cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    Cart[index] = 0;
  }

  return Cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems[itemId] > 0) {
        updatedCartItems[itemId] -= 1;
      }
      return updatedCartItems;
    });
  };

  const getCartTotal = () => {
    let totalItems = 0;
    all_product.forEach((product) => {
      if (cartItems[product.id] > 0) {
        totalItems += product.new_price * cartItems[product.id];
      }
    });
    return totalItems;
  };

  const cartItemsTotal = () => {
    let cartTotal = 0;
    all_product.forEach((product) => {
      if (cartItems[product.id] > 0) {
        cartTotal += cartItems[product.id];
      }
    });

    return cartTotal;
  };
  const contextValue = {
    cartItemsTotal,
    getCartTotal,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
