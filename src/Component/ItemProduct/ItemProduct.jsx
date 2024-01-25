import React from "react";
import Item from "../Item/Item";
import "./ItemProduct.css";
import data_product from "../Assest/data";
const ItemProduct = () => {
  return (
    <div className="container">
      <div className="item-product">
        <h1>Popular in women</h1>
        <hr />
        <div className="item-products">
          {data_product.map((item, index) => {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;
