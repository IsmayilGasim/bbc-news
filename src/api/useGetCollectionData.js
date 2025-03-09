import { useEffect, useState } from "react";
import axios from "axios";
import { collectionURL } from "./firebase"; // Import your Firestore instance

export default function useGetCollectionData(collectionName) {
  const [result, setResult] = useState(null);
    
  useEffect(() => {
    if (!collectionName) return;
    axios
      .get(collectionURL.replace("collection_name", collectionName))
      .then((data) => {
        setResult(data.data.documents[0].fields);
      });
  }, [collectionName]);

  return { data: result };
}
