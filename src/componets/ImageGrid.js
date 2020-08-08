import React, { useContext } from "react";
import useFirestore from "../hooks/useFirestore";
import { AppContext } from "../contexts/contexts";
import { motion } from "framer-motion";
const ImageGrid = () => {
  const context = useContext(AppContext);

  const { imgUrl } = context;
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            key={doc.id}
            layout
            className="img-wrapper"
            onClick={() => imgUrl(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="imgs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
