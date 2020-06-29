import React, { useEffect, useState } from "react";

export default function useFetch(url) {
  const [state, setState] = useState({ data: null, loading: true });
  console.log(state);
  console.log(url);
  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));

    fetch(url)
      .then((res) => res.text())
      .then((result) => setState({ data: result, loading: false }));
  }, [url, setState]);

  return state;
}
