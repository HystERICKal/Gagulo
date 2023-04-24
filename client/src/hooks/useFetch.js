import { useState } from "react";
import { useEffect } from "react";
// import axios from "axios";
import { makeRequest } from "../makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //You can use ReactQuery here but since only data is being fetched and
  //No POST methods will be used, useEffect is sufficient
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(
          url
          //   process.env.REACT_APP_API_URL +
          //     `/products?populate=*&[filters][type][$eq]=${type}`,
          //
        );
        setData(res.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]); //dependency

  return { data, loading, error };
};

export default useFetch;
