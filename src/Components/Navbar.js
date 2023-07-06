import React from "react";
import './Navbar.css';
import { FaTypo3, FaSistrix, FaRegHeart } from "react-icons/fa";
import { BsBagCheck} from "react-icons/bs";
import { HiMenu} from "react-icons/hi";

const Navbar = ()=>{
  return (
    <div>
      <div className="topMessageContainer">
        <div className="topMessage">30 DAYS FREE RETURNS</div>
      </div>
      <div className="topnav">
        <div className="brand">
          <div>
            <FaTypo3 />
          </div>
          <div className="brandName">GLAMOURSPHERE</div>
        </div>

        <div className="navLinks">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#news">Shop</a>
          <a href="#contact">Men</a>
          <a href="#about">Women</a>
        </div>
        <div className="rightWidget">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            {/* <button className="btn btn-outline my-2 my-sm-0" type="submit">
              <FaSistrix />
            </button> */}
          </form>
          <div className="searchIcon">
            <FaSistrix />
          </div>
          <div className="cartIcons">
            <FaRegHeart />
          </div>
          <div className="cartIcons">
            <BsBagCheck />
          </div>
          <div className="toggleMenu">
            <HiMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;