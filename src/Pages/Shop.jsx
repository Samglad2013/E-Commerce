import React from "react";
import ShopData from "../Component/ShopData/ShopData";
import ItemProduct from "../Component/ItemProduct/ItemProduct";
import NewCollections from "../Component/NewCollections/NewCollections";
import Offers from "../Component/Offers/Offers";
import NewsLetter from "../Component/NewsLetter/NewLetter";

const Shop = () => {
  return (
    <div>
      <ShopData />
      <ItemProduct />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
