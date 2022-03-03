import Link from "next/link";
import { useContext, useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { useUserManagementHook } from "../../hooks/userManagementHook";
import { useRouter } from "next/dist/client/router";
import FormWrapper from "../../components/HomePage/FormWrapper";
import LMSMobileLayout from "../../layouts/LMSMobileLayout";
import TeacherLayout from "../../layouts/TeacherLayout";

export default function Index(props) {
  useUserManagementHook();

  const [device, setDevice] = useState("");
  const user = useSelector((state) => state.UserReducer);
  const router = useRouter();

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
      {isMobile() &&
        user.isLogin &&
        (user.data.title == "teacher" || user.data.title == "admin") && (
          <LMSMobileLayout />
        )}
      {!isMobile() &&
        user.isLogin &&
        (user.data.title == "teacher" || user.data.title == "admin") && (
          <TeacherLayout />
        )}
      {!user.isLogin && <FormWrapper defaultForm={"login"} />}
      <div id="modal-root"></div>
    </>
  );
}
