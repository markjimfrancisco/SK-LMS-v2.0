import { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';

export const usePostHttp = (data, endpoint) => {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  useEffect(() => {
    if (data && !isLoading) {
      setLoading(true);
    }
  }, [data]);

  useEffect(() => {
    if (isLoading)
      fetch(`${process.env.SERVER_DOMAIN}${endpoint}`, {
        method: "POST",
        credentials: 'include',
        headers: { 
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': process.env.WEBSITE_DOMAIN,
          "token": cookies['token']
        },
        body: JSON.stringify({
          data,
        }),
      })
        .then((res) => {
          try {
            if (res.status == 200) {
              return res.json();
            }
          } catch (err) {
            console.warn(err);
          }
        })
        .then((res) => {
          setSuccess(res);
        });
  }, [isLoading]);

  useEffect(() => {
    if (isSuccess) setLoading(false);
  }, [isSuccess]);
  return [isLoading, isSuccess];
};
