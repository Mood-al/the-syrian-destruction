import React, { useContext } from "react";
import { AppContext } from "../contexts/contexts";
import ProgressBar from "./ProgressBar";
const Input = () => {
  const val = useContext(AppContext);
  const { file, err, dark } = val;
  const inputHandeler = (e) => {
    const file = e.target.files[0];
    val.onInputChange(file);
  };

  return (
    <div className="form-container">
      <form>
        <label className={dark ? " blue lighten-1" : null}>
          <input type="file" onChange={inputHandeler} />
          <span>+</span>
        </label>
        <span
          className={dark ? "white-text center" : "center"}
          style={{ display: "block", marginTop: "5px" }}
        >
          add an image
        </span>
      </form>
      <h5 className="blue-text lighten-2 center">{err && <p>{err}</p>}</h5>
      <h5 className="blue-text lighten-2 center">
        {file && <p>{file.name}</p>}
      </h5>
      {file && <ProgressBar />}
    </div>
  );
};

export default Input;
