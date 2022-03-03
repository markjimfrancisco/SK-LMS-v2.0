import { signOut } from "next-auth/client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { DoLogin } from "../redux/actions/UserAction";

export const useUserManagementHook = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserReducer);

  const [deviceData, setDeviceData] = useState(null);

  useEffect(() => {
    // if (!localStorage.getItem("isLogin"))
    //   localStorage.setItem("isLogin", false);

    if (
      localStorage.getItem("user") &&
      localStorage.getItem("isLogin") == "true"
    ) {
      dispatch(
        DoLogin(
          true,
          JSON.parse(localStorage.getItem("user")),
          JSON.parse(localStorage.getItem("remember"))
        )
      );
    }
    if (!localStorage.getItem("guestId"))
      setDeviceData({
        os: window.navigator.oscpu,
        browser: window.navigator.userAgent,
      });
  }, []);

  // useEffect(() => {
  //   if (deviceData) socket.emit("visit", deviceData);
  // }, [deviceData]);

  useEffect(() => {
    if (user.isLogin) {
      // console.log('creating local data');
      localStorage.setItem("isLogin", true);
      localStorage.setItem("user", JSON.stringify(user.data));
      localStorage.setItem("remember", false);
    }
  }, [user]);

  useEffect(() => {
    if (!user.isLogin) {
      localStorage.removeItem("user");
      localStorage.removeItem("isLogin");
      signOut({redirect: false, callbackUrl:'/'})
    }
  });
};
