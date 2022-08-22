import React, { useState } from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Menu from "./Menu";
import "./App.css";
import HeaderBlock from "./HeaderBlock";
import Login from "./Login";
import { selectUser } from "./features/counterSlice";
import { useSelector } from "react-redux";
import Signup from "./Signup";
import TeslaAccount from "./TeslaAccount";
// import { userSlice } from "./features/counterSlice";

function App() {
  const user = useSelector(selectUser);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
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
