import React from "react";
import logo from "../Group 1.svg";
const Header = () => {
  return (
    <div className="center">
      <div className="img-container">
        <img src={logo} alt="log" />
      </div>
      <p>
        by using this app you can upload and watch images of the syrian tragedy{" "}
      </p>
      <div className="border"></div>
    </div>
  );
};

export default Header;
