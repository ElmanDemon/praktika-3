import React from "react";
import { Link } from "react-router-dom";
import "./style.scss"
function Navbar() {
  return (
    <nav>
      <img
        src="https://preview.colorlib.com/theme/aroma/img/logo.png"
        alt=""
      ></img>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Shop"}>Shop</Link>
        </li>
        <li>
          <Link to={"/"}>Blog</Link>
        </li>
        <li>
          <Link to={"/"}>Pages</Link>
        </li>
        <li>
          <Link to={"/"}>Contact</Link>
        </li>
      </ul>
      <div>
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-cart-shopping"></i>
        <button>Buy Now</button>
      </div>
    </nav>
  );
}

export default Navbar;
