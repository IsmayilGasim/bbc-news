import { useState, useEffect } from 'react';
import axios from 'axios';
import { collectionURL } from './firebase';

export  function useGetCollectionData(collectionName) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ Loading state əlavə etdik
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!collectionName) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          collectionURL.replace('collection_name', collectionName)
        );
        if (response.data.documents?.length) {
          setData(response.data.documents[0].fields); // ✅ Uğurlu data
        } else {
          setData(null); // Data tapılmadısa null
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to fetch data'); // Xəta mesajı
      } finally {
        setLoading(false); // Yükləmə bitdi
      }
    };

    fetchData();
  }, [collectionName]);

  return { data, loading, error }; // ✅ Loading və error qaytarırıq
}
