import {useState, useEffect} from 'react';
import { useCookies } from "react-cookie";

export const useHttp = (url, dependencies) => {
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch(`${process.env.SERVER_DOMAIN}${url}`, {
      credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": process.env.WEBSITE_DOMAIN,
        token: cookies["token"],
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json();
      })
      .then(data => {
        setIsLoading(false);
        setFetchedData(data);
      })
      .catch(err => {
        setIsLoading(false);
      });
  }, dependencies);

  return [isLoading, fetchedData];    

}