import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    fetch(url)
      .then((payload) => payload.json())
      .then((json) => setState({ data: json, loading: false }))
      .catch((err) => console.error(err));
  });

  return state;
};

export default useFetch;
