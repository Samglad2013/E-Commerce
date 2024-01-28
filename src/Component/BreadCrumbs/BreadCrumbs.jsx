import React from "react";
import arrow_icon from "../Assest/arrow_icon.png";


const BreadCrumbs = (props) => {
  const { category, name } = props.product;
  return (
    <div className="container">
      <div className="breadcrumbs">
        {name}
        <img src={arrow_icon} alt="" />
        {category}
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default BreadCrumbs;
