import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import FormWrapper from "../components/HomePage/FormWrapper";
import { useUserManagementHook } from "../hooks/userManagementHook";

export default function TermsAndPolicy (props) {
    useUserManagementHook();
    const [status, setStatus] = useState('school-registration');
    const user = useSelector(state => state.UserReducer);
    const router = useRouter();
  
    return (
      <>
        <FormWrapper defaultForm="term-and-policy" />
      </>
    )
}