import React, { useContext, useEffect } from "react";
import { AppContext } from "../contexts/contexts";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";
const ProgressBar = () => {
  const context = useContext(AppContext);
  const { file, setFile } = context;

  const { url, progress } = useStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: progress + "%" }}
        className="bar"
      ></motion.div>
      <h5 className="center pink-text darken-1">{progress} %</h5>
    </>
  );
};

export default ProgressBar;
