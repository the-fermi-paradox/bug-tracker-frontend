import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    setState((state) => state);
    fetch(url)
      .then((payload) => payload.json())
      .then((json) => {
        setState(json);
      })
      .catch((err) => console.error(err));
  }, [url, setState]);

  return [state, setState];
};

export default useFetch;
