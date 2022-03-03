import { useState, useEffect } from "react";

export const addRecipientHook = (data, endpoint, dependencies) => {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  useEffect(() => {
    setLoading(true);
    // console.log('Sending Http request to URL: ' + url);
    fetch(`${process.env.SERVER_DOMAIN}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
  }, dependencies);
  
  return [isLoading, isSuccess];
};
