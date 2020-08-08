import React, { useContext } from "react";
import { AppContext } from "../contexts/contexts";
import { motion } from "framer-motion";
const Modal = () => {
  const context = useContext(AppContext);
  const { url, imgUrl } = context;
  const modal = (e) => {
    if (e.target.classList.contains("modalImg")) {
      imgUrl(null);
    }
  };
  return (
    <motion.div
      className="modalImg"
      onClick={modal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={url}
        alt="img"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
