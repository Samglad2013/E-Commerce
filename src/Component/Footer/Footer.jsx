import React from "react";
import logo from "../Assest/logo.png";
import instagram from "../Assest/instagram_icon.png";
import pinterest from "../Assest/pinterest_icon.png";
import whatsapp from "../Assest/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        {" "}
        <img src={logo} alt=""></img>
        <p>Shop@Gladys</p>
      </div>
      <ul className="footer-link">
        <l1>Company</l1>
        <l1>Product</l1>
        <l1>Office</l1>
        <l1>About</l1>
        <l1>Contact</l1>
      </ul>
      <div className="footer-icons">
        <div className="footer-social-icons">
          <img src={pinterest} alt="" />
        </div>
        <div className="footer-social-icons">
          <img src={instagram} alt="" />
        </div>
        <div className="footer-social-icons">
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>copyright@23 -All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
