import React from "react";

const DescriptionBox = () => {
  return (
    <div className="container">
      <div className="description-box">
        <div className="description-box-navigator">
          <div className="description-box-reviews-text">Description</div>
          <div className="description-box-reviews">Reviews (122)</div>
        </div>
        <div className="description-box-description">
          <p>
            "Explore our user-friendly e-commerce platform offering a diverse
            range of products. Seamless navigation, secure transactions, and
            detailed product descriptions enhance your shopping experience.
            Enjoy exclusive deals, prompt customer support, and efficient
            delivery. Elevate your online shopping with us, where quality and
            convenience converge for a satisfying purchase journey."
          </p>
          <p>
            "Discover a streamlined online shopping experience at our e-commerce
            hub. Browse a curated selection, enjoy secure transactions, and
            receive prompt delivery. Elevate your shopping journey with us,
            where convenience meets quality."
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
