import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "./teslaaccount.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counterSlice";
import "./teslaaccount.css";
import Car from "./Car";

function TeslaAccount({ setIsMenuVisible, isMenuVisible }) {
  const user = useSelector(selectUser);
  const logoutOfApp = () => {
    console.log("hello");
  };

  return (
    <div className="teslaAccount">
      <div className="teslaAccount__header">
        <div className="teslaAccount__logo">
          <Link to="/">
            {/*  <img src={teslalogo} alt="logo" /> */}
            <Typography className="">TELSA</Typography>
          </Link>
        </div>
        <div className="teslaAccount__links">
          <Link to="/teslaa">Model S</Link>
          <Link to="/teslaa">Modal 3</Link>
          <Link to="/teslaa">Modal X</Link>
          <Link to="/teslaa">Modal Y</Link>
          <Link to="/teslaa">Solar Roof</Link>
          <Link to="/teslaa">Solar Panels</Link>
          <Link to="/teslaa">Shop</Link>
          <Link to="/teslaa">Teslaaccount</Link>
          <Link onClick={logoutOfApp} to="/teslaa">
            Logout
          </Link>
          <div
            className="teslaAccount__menu"
            onClick={() => setIsMenuVisible(!isMenuVisible)}
          >
            {isMenuVisible ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </div>
      <div className="teslaccount__info">
        <div className="teslaaccount_person">
          <h4>{user?.displayName + "s"}</h4>
        </div>
        <div className="teslaaccount__infoRight">
          <Link to="/">Home</Link>
          <Link to="/">Account</Link>
          <Link to="/">History</Link>
          <Link to="/" onClick={logoutOfApp}>
            SignOut
          </Link>
        </div>
      </div>
      <div className="teslaaccount__car">
        <Car
          imagesrc="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/110005125/thumbnails/large/2HGFE2F51NH599263/f66be52903ce11a5ada8958edc62e247.png"
          modeltype="model S"
          testDrive="hii nmedjljsa"
        />
        <Car
          imagesrc="https://cars.usnews.com/static/images/Auto/izmo/i159614637/2022_hyundai_elantra_angularfront.jpg"
          modeltype="model S"
          testDrive="hii nmedjljsa"
        />
        <Car
          imagesrc="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/carbon-fiber-shelby-mustang-1600685276.jpg?crop=0.9988636363636364xw:1xh;center,top&resize=480:*"
          modeltype="model S"
          testDrive="hii nmedjljsa"
        />
      </div>
    </div>
  );
}

export default TeslaAccount;
