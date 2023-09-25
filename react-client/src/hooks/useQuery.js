import { useEffect, useState } from "react";

export default function useQuery(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData();
  }, []);
  return { data };
}
