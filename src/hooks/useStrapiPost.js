import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useStrapiPost(dataToSend, urlEnd) {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError('');
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_STRAPI_URL}/${urlEnd}`,
          {
            identifier: dataToSend.email,
            password: dataToSend.password,
          }
        );
        setData(data);
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
