import React, { useEffect, useState } from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Menu from "./Menu";
import "./App.css";
import HeaderBlock from "./HeaderBlock";
import Login from "./Login";
import { selectUser } from "./features/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import Signup from "./Signup";
import { auth } from "./firebase";
import TeslaAccount from "./TeslaAccount";
import { login, logout } from "./features/counterSlice";

// import { userSlice } from "./features/counterSlice";

function App() {
  const user = useSelector(selectUser);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      }
      if (!userAuth) {
        // user signed out
        dispatch(logout({}));
      }
    });
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/login"
            {...(user ? <Navigate path="/teslaa" /> : <Login />)}
            element={<Login />}
          />
          <Route path="/signUp" element={<Signup />} />
          <Route exact path="/teslaaccount" element={<TeslaAccount />} />
          <Route
            exact
            path="/teslaaccount"
            {...(user ? (
              <Navigate path="/teslaaccount" />
            ) : (
              <TeslaAccount
                isMenuVisible={isMenuVisible}
                setIsMenuVisible={setIsMenuVisible}
              />
            ))}
            element={
              <TeslaAccount
                isMenuVisible={isMenuVisible}
                setIsMenuVisible={setIsMenuVisible}
              />
            }
          />

          <Route
            exact
            path="/"
            element={
              <>
                <Header
                  isMenuVisible={isMenuVisible}
                  setIsMenuVisible={setIsMenuVisible}
                />
                {isMenuVisible && <Menu />}
                <HeaderBlock />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
