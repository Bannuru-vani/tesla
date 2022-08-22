import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header({ isMenuVisible, setIsMenuVisible }) {
  return (
    <div className="header">
      <div className="header_logo">
        <div className="header_logoImag">
          <Link to="/">
            {/*  <img src={teslalogo} alt="logo" /> */}
            <Typography className="">TELSA</Typography>
          </Link>
        </div>
      </div>
      <div className="header_links">
        <Link to="/">Modal S</Link>
        <Link to="/">Modal 3</Link>
        <Link to="/">Modal X</Link>
        <Link to="/">Modal Y</Link>
        <Link to="/">Solar Roof</Link>
        <Link to="/">Solar Panels</Link>
      </div>
      <div className="header_right">
        <Link to="/" className={isMenuVisible && "header_link__hidden"}>
          Shop
        </Link>
        <Link to="/login" className={isMenuVisible && "header_link__hidden"}>
          Tesla Account
        </Link>
        <div
          className="header_menu"
          onClick={() => setIsMenuVisible(!isMenuVisible)}
        >
          {isMenuVisible ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </div>
  );
}

export default Header;
