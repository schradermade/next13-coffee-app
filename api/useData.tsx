"use client";

import { useEffect, useState } from "react";

export default async function useData(url: string) {
  console.log("getting data");
  const [data, setData] = useState(null);
  useEffect(() => {
    if (url) {
      let ignore = false;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          if (!ignore) {
            setData(json);
          }
        });
      return () => {
        ignore = true;
      };
    }
  }, [url]);
  console.log("DATA", data);

  return data;
}
