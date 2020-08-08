import { useState, useEffect } from "react";
import { storage, firestore, timeStamp } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [err, setErr] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = storage.ref(file.name);
    const firestoreCollection = firestore.collection("images");
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let precntage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(precntage);
      },
      (err) => {
        setErr(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
        firestoreCollection.add({
          url,
          createdAt: timeStamp(),
        });
      }
    );
  }, [file]);
  return {
    url,
    progress,
    err,
  };
};

export default useStorage;
