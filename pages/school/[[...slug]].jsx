import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import MainLayout from "../../layouts/MainLayout";

import { SocketContext, socket } from "../../context/socket";

import { useUserManagementHook } from "../../hooks/userManagementHook";
import { useRouter } from "next/dist/client/router";
import LMSMobileLayout from "../../layouts/LMSMobileLayout";
import FormWrapper from "../../components/HomePage/FormWrapper";

export default function Index(props) {
  useUserManagementHook();
  const [device, setDevice] = useState('');
  const [status, setStatus] = useState("login");

  const user = useSelector((state) => state.UserReducer);
  const router = useRouter();

  useEffect(() => {
    setDevice(window.navigator.userAgent);
  },[])
  
  useEffect(() => {
    if (user.isLogin && user.data) {
      let data = {
        id: user.data.id,
        username: user.data.username,
        type: user.data.usertype,
      };
      data ? socket.emit("CONNECT", data) : null;
    }
  });

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
  }

  return (
    <SocketContext.Provider value={socket}>
      <>
        {isMobile() && user.isLogin && user.data.title == 'teacher' && <LMSMobileLayout />}
        {!isMobile() && user.isLogin && user.data.title == 'teacher' && <MainLayout />}
        {!user.isLogin && <FormWrapper defaultForm={'login'} />}
      </>
    </SocketContext.Provider>
  );
}
