import React from "react";
import data_product from "../Assest/data";
import Item from "../Item/Item";
import "./RelatedProduct.css";

const RelatedProduct = () => {
  return (
    <div className="container">
      <div className="related-products">
        <h1>Related Products</h1>
        <hr />
        <div className="related-product-item">
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

export default RelatedProduct;
