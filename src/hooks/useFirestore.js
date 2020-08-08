import { useState, useEffect } from "react";
import { firestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    firestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => documents.push({ ...doc.data(), id: doc.id }));
        setDocs(documents);
      });
  }, [collection]);
  return {
    docs,
  };
};
export default useFirestore;
