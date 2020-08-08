import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [err, setErr] = useState(null);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
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
  const uploadingDone = () => {
    setFile(null);
    setErr(null);
    console.log("done");
  };
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
        uploadingDone,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
