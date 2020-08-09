import React, { useContext } from "react";
import { AppContext } from "../contexts/contexts";

const Footer = () => {
  const context = useContext(AppContext);
  const { dark } = context;
  return (
    <div className={dark ? "footer white-text" : "footer"}>
      <p>this app has been made by MooD</p>
      <span>
        you can follow me on
        <a
          href="https://twitter.com/aliwi299"
          target="_blank"
          className="pink-text darken-1"
        >
          {"  "} twitter
        </a>
      </span>
      <div className=""></div>
    </div>
  );
};

export default Footer;
