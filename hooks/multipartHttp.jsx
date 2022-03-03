import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export const useMultipartHttp = (data, endpoint) => {
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  useEffect(() => {
    if (data && !isSuccess) {
      setLoading(true);
    }
  }, [data]);

  useEffect(() => {
    if (isLoading) {
      console.log(data);
      fetch(`${process.env.SERVER_DOMAIN}${endpoint}`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Access-Control-Allow-Origin": process.env.WEBSITE_DOMAIN,
          token: cookies["token"],
        },
        body: data,
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
    }
  }, [isLoading]);

  useEffect(() => {
    if (isSuccess) setLoading(false);
  }, [isSuccess]);
  return [isLoading, isSuccess];
};
