import React, { useContext } from "react";
import { AppContext } from "../contexts/contexts";

const Footer = () => {
  const context = useContext(AppContext);
  const { dark } = context;
  return (
    <div className={dark ? "footer white-text" : "footer"}>
      <p style={{ paddingTop: "10px", fontSize: "1.1rem" }}>
        {" "}
        behind any of these pictures there was a story there was fear there were
        tears and alot of sadness
      </p>
      {/* <p style={{ paddingTop: "10px", fontSize: "1.02rem" }}>
        just be a human!
      </p> */}
      <span style={{ marginTop: "15px" }}>
        <span>this app has been made by MooD</span>
        you can follow me on
        <a
          href="https://twitter.com/aliwi299"
          target="_blank"
          rel="noopener noreferrer"
          className="pink-text darken-1"
        >
          {"  "} twitter
        </a>
      </span>
    </div>
  );
};

export default Footer;
