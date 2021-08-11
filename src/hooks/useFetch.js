import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({ data: null });
  useEffect(() => {
    setState((state) => ({ data: state.data }));
    fetch(url)
      .then((payload) => payload.json())
      .then((json) => {
        console.log(json);
        setState({ data: json });
      })
      .catch((err) => console.error(err));
  }, [url, setState]);

  return state;
};

export default useFetch;
