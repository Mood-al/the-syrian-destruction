import React, { useContext } from "react";
import logo from "../Group 1.svg";
import { AppContext } from "../contexts/contexts";
const Header = () => {
  const context = useContext(AppContext);
  const { dark } = context;
  return (
    <div className="center">
      <div className="img-container">
        <img src={logo} alt="log" />
      </div>
      <p className={dark ? "white-text" : null}>
        by using this app you can upload and watch images of the syrian tragedy{" "}
      </p>
      <div className={dark ? "border pink" : "border"}></div>
    </div>
  );
};

export default Header;
