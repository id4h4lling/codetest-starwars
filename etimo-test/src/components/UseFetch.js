import { useState, useEffect } from "react";

const cache = {};
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(cache);
    if (cache[url]) {
      setData(cache[url]);
      return;
    }
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        cache[url] = json;
        setData(json);
      });
  }, [url]);

  return data;
};
