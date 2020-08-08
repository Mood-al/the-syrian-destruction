import React, { useContext } from "react";
import { AppContext } from "../contexts/contexts";
import "../App.css";
import Header from "./Header";
import Input from "./Input";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
const App = () => {
  const context = useContext(AppContext);
  const { url } = context;
  return (
    <div className="container">
      <Header />
      <Input />

      <ImageGrid />

      {url && <Modal />}
    </div>
  );
};

export default App;
