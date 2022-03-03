import {useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { useUserManagementHook } from "../../hooks/userManagementHook";
import { useRouter } from "next/dist/client/router";
import { socket, SocketContext } from "../../context/socket";
import AdminLayout from "../../layouts/AdminLayout";
import FormWrapper from "../../components/HomePage/FormWrapper";
import LMSMobileLayout from "../../layouts/LMSMobileLayout";

export default function Index(props) {
  useUserManagementHook();

  const [device, setDevice] = useState('');
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [onlineUserCount, setOnlineUserCount] = useState(0);
  const [registeredUserCount, setRegisteredUserCount] = useState(0);
  const user = useSelector((state) => state.UserReducer);
  const router = useRouter();

  // useEffect(() => {
  //   setDevice(window.navigator.userAgent);

  //   let data = {
  //     id: 1,
  //     username: "admin",
  //     type: "1",
  //   };
  //   data ? socket.emit("CONNECT", data) : null;
  // }, []);

  // useEffect(() => {
  //   socket.emit("ONLINE_USER_COUNT");

  //   socket.on("ONLINE_USER_COUNT", (data) => {
  //     setOnlineUserCount(data);
  //   });

  //   socket.emit("REGISTERED_USER_COUNT");

  //   socket.on("REGISTERED_USER_COUNT", (data) => {
  //     setRegisteredUserCount(data);
  //   });
  // });

  const isMobile = () => {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
    ];

    return toMatch.some((toMatchItem) => {
      return device.match(toMatchItem);
    });
  };

  return (
    <>
    {isMobile() && user.isLogin && user.data.title == "admin" && (
      <LMSMobileLayout />
    )}
    {!isMobile() && user.isLogin && user.data.title == "admin" && (
      <AdminLayout />
    )}
    {!user.isLogin && <FormWrapper defaultForm={"login"} />}
  </>
  );
}
