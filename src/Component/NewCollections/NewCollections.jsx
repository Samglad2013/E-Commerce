import React from "react";
import Item from "../Item/Item";
import "./NewCollections.css";
import new_collections from "../Assest/new_collections";
const NewCollections = () => {
  return (
    <div className="container">
      <div className="new_collection">
        <h1>New Collections</h1>
        <hr />
        <div className="collections">
          {new_collections.map((item, index) => {
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

export default NewCollections;
