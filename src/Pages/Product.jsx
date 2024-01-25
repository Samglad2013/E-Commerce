import React, { useContext } from "react";
import ProductDisplay from "../Component/ProductDisplay/ProductDisplay";
import { ShopContext } from "../Context/ShopContext";
import BreadCrumbs from "../Component/BreadCrumbs/BreadCrumbs";
import { useParams } from "react-router";
import DescriptionBox from "../Component/DescriptionBox/DescriptionBox";
import RelatedProduct from "../Component/RelatedProduct/RelatedProduct";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { id } = useParams();
  const product = all_product.find((e) => e.id === Number(id));

  return (
    <div className="product-details">
      <BreadCrumbs product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};

export default Product;
