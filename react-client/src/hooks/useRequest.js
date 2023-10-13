import { useState } from "react";

export default function useRequest(executor) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetch = () => {
    setData(null);
    setLoading(true);
    setError(null);
    executor()
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        setError(e.response.data);
      })
      .finally(() => setLoading(false));
  };
  return { data: data, loading: loading, error, fetch };
}
