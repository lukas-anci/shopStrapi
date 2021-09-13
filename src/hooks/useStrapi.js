import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';

export default function useStrapi(urlEnd, token = null) {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const headersObj = useMemo(() => {
    return token
      ? {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      : null;
  }, [token]);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError('');
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_STRAPI_URL}/${urlEnd}`,
          headersObj
        );
        // console.log(data);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError('Something went wong');
        // console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [urlEnd]);

  return [data, isLoading, error];
}
