import React, { useEffect, useState } from "react";

export default function UseGetdata() {
  const [dataItems, setDateitems] = useState([]);
  useEffect(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await res.json();
      setDateitems(data.slice(1, 10));
    } catch (error) {
      console.log("error while fetching api", error);
    }
  }, []);

  return dataItems;
}
