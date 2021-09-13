import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useHttp(url) {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    // IIFE
    (async () => {
      try {
        const { data } = await axios.get('https://fakestoreapi.com/' + url);
        // console.log(data);
        if (!data) throw new Error('No data came back from reques');
        setShopData(data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [url]);

  return shopData;
}
