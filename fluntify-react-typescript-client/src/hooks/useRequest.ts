import { useState } from "react";

type useRequestType = {
  data: object;
  loading: boolean;
  error: any;
  fetch: () => void;
};

type useRequestOptions = {
  successCallback?: () => void;
  failureCallback?: () => void;
};

export default function useRequest(
  fn,
  options: useRequestOptions = {}
): useRequestType {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetch = () => {
    setData(null);
    setLoading(true);
    setError(null);
    console.log("FUnction is : ", fn);
    fn()
      .then((data) => {
        setData(data);
        if (options.successCallback) options.successCallback();
      })
      .catch((e) => {
        setError(e.response.data);
        if (options.failureCallback) options.failureCallback();
      })
      .finally(() => setLoading(false));
  };
  return { data: data, loading: loading, error, fetch };
}
