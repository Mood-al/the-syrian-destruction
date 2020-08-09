import React, { useContext } from "react";
import { AppContext } from "../contexts/contexts";
const Mode = () => {
  const context = useContext(AppContext);
  const { modeChanger, dark } = context;
  return (
    <div
      className={dark ? "mode" : "pink darken-1 mode"}
      onClick={() => modeChanger(true)}
    >
      <i className="material-icons">{dark ? "nights_stay" : "wb_sunny"}</i>
      {/* <i class="material-icons">wb_sunny</i> */}
    </div>
  );
};

export default Mode;
