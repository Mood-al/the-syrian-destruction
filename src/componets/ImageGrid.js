import React, { useContext } from "react";
import useFirestore from "../hooks/useFirestore";
import { AppContext } from "../contexts/contexts";
import { motion } from "framer-motion";
const ImageGrid = () => {
  const context = useContext(AppContext);

  const { imgUrl } = context;
  const { docs } = useFirestore("images");
  console.log(docs);
  return (
    <div className="row" style={{ marginTop: "50px" }}>
      {docs.map((doc) => (
        <motion.div className="col s4" key={doc.id} layout>
          <motion.img
            src={doc.url}
            style={{ width: "100%" }}
            onClick={() => imgUrl(doc.url)}
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
