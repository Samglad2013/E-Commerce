import React, { useContext } from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import logo from "../Assest/logo.png";
import cart_icon from "../Assest/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () => {
  const { cartItemsTotal } = useContext(ShopContext);
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar_logo">
          <Link to="/">
            {" "}
            <img src={logo} alt=""></img>
          </Link>

          <p>Shop@Gladys</p>
        </div>
        <ul className="nav_menu">
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/mens" style={{ textDecoration: "none" }}>
              Mens
            </Link>
          </li>
          <li>
            <Link to="/women" style={{ textDecoration: "none" }}>
              {" "}
              Women
            </Link>
          </li>
          <li>
            <Link to="/kids" style={{ textDecoration: "none" }}>
              Kids
            </Link>
          </li>
        </ul>
        <div className="nav_cart_icon">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/cart">
            <img src={cart_icon} alt=""></img>
          </Link>
          <div className="nav_cart_count">{cartItemsTotal()}</div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
