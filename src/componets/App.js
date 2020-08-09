import React, { useContext } from "react";
import { AppContext } from "../contexts/contexts";
import "../App.css";
import Header from "./Header";
import Input from "./Input";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import Mode from "./Mode";
import Footer from "./Footer";
const App = () => {
  const context = useContext(AppContext);
  const { url, dark } = context;
  return (
    <div
      className={dark ? "grey darken-4" : null}
      style={{ paddingBottom: "100px" }}
    >
      <div className="container  ">
        <Mode />
        <Header />
        <Input />

        <ImageGrid />

        {url && <Modal />}
        <Footer />
      </div>
    </div>
  );
};

export default App;
