import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import { useDispatch } from "react-redux";
import "./Login.css";
import { login } from "./features/counterSlice";
import { auth } from "./firebase";

function Login() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
        history.push("/teslaa");
      })
      .catch((error) => {
        alert(error.message);
      });
    console.log("hello");
  };
  const signUp = (e) => {
    console.log("hello");
  };
  return (
    <div className="login">
      <div className="login-icons">
        <span>
          <Link to="/">
            <Typography className="">TELSA</Typography>
          </Link>
        </span>

        <span style={{ display: "flex", flexDirection: "row" }}>
          <LanguageIcon />
          <Typography>en-US</Typography>
        </span>
      </div>
      <div className="login__info">
        <h1>Sign In</h1>
        <form className="login__form">
          <label style={{ marginBottom: "10px" }} htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label style={{ marginBottom: "10px" }} htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <ButtonPrimary name="Sign In" type="submit" onClick={signIn} />
        </form>
        <div className="login__divider">
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to="/signup">
          <ButtonSecondary
            name="Create Account"
            type="submit"
            onClick={signUp}
          />
        </Link>
      </div>
    </div>
  );
}

export default Login;
