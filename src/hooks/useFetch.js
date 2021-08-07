import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((payload) => payload.json())
      .then((json) => setState({ data: json, loading: false }))
      .catch((err) => console.error(err));
  }, [url, setState]);

  return state;
};

export default useFetch;
