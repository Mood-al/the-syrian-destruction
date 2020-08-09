import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [err, setErr] = useState(null);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [dark, setDark] = useState(intialMode());
  const onInputChange = (file) => {
    let types = ["image/png", "image/jpeg"];
    if (file && types.includes(file.type)) {
      setFile(file);
      setErr(null);
    } else {
      setErr("please add an image");
      setFile(null);
    }
  };
  const imgUrl = (url) => {
    setUrl(url);
  };

  const modeChanger = (val) => {
    setDark((prevDark) => !prevDark);
    // intialMode();
  };
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

  function intialMode() {
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    return savedMode;
  }
  return (
    <AppContext.Provider
      value={{
        onInputChange: onInputChange,
        file,
        setFile,
        err,
        setErr,
        url,
        imgUrl,
        modeChanger,
        dark,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
