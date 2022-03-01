import { useState, useEffect, useCallback } from 'react';
import hosting from './baseUrlAPI';

export const useFetch = (endpoint) => {
  let url = '';

  if (endpoint !== '' && endpoint !== undefined && endpoint.charAt(0) !== '/') {
    url = hosting.concat('/', endpoint);
  } else {
    url = hosting.concat(endpoint);
  }

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);
  return { loading, data };
};
