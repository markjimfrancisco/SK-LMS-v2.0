import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePostHttp } from "../../hooks/postHttp";
import {
  DoAccountVerification,
  UserLogout,
} from "../../redux/actions/UserAction";
import CodeInputField from "../CodeInputField";
import RedirectionComponent from "./RedirectionComponent";

const AccountVerificationForm = ({ showModal, setForm, userid }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserReducer);

  const [code, setCode] = useState("");
  const [validCode, setValidCode] = useState(false);
  const [disable, setDisable] = useState(true);
  const [toSubmit, setToSubmit] = useState(false);

  const [validingAccount, accountVerified] = usePostHttp(
    toSubmit ? { code: code, userid } : null,
    "/validate/account"
  );

  useEffect(() => {
    if (validCode) setDisable(false);
    else setDisable(true);
  }, [validCode]);

  useEffect(() => {
    if (accountVerified.success) {
      dispatch(DoAccountVerification(accountVerified.success));
    } else{ 
      setToSubmit(false);
      dispatch(UserLogout(false));
      setForm("login");
    }
  }, [accountVerified]);

  useEffect(() => {
    if (user.data.verified && showModal) showModal(false);
  }, [user.data.verified]);

  const handleClick = () => {
    dispatch(UserLogout(false));
    setForm("login");
  };

  return (
    // user.data.verified ? <RedirectionComponent /> :
    <>
      <label className="w-full mt-10 text-left font-bold lg:text-4xl md:text-4xl 1080p:text-4xl sm:text-2xl xs:text-2xl text-gray-700">
        Account Verification
      </label>
      <div className="flex items-center mt-10 w-full space-x-4">
        <label className="lg:w-full md:w-3/4 sm:w-full xs:w-3/4 text-left text-lg  font-semibold text-subheading">
          We sent a verification code to your email.
        </label>
      </div>
      <div className="w-full flex space-x-2 my-4">
        <div className={`bg-skBlue h-1 w-full rounded-xl`}></div>
      </div>
      <CodeInputField
        classNames="lg:w-full md:w-full sm:w-full xs:w-11/12 mt-2 rounded-xl border border-lightGray placeholder-lightGray"
        value={code}
        setValue={setCode}
        placeholder="Verification Code"
        to={false}
        endpoint={`/verify/verification-code?value=`}
        alert={true}
        errorMessage="Code does not exist!"
        setValidCode={setValidCode}
      />
      <button
        disabled={disable ? true : false}
        onClick={() => {
          setToSubmit(true);
        }}
        className="bg-blue-500 text-white text-xl font-semibold w-full mt-10 py-3 rounded-full disabled:opacity-50"
      >
        Submit
      </button>

      <a
        onClick={() => {
          handleClick();
        }}
        className="text-gray-500 mt-6 cursor-pointer"
      >
        Already have an account?{" "}
        <span className="text-blue-400 font-bold">Login.</span>
      </a>
    </>
  );
};

export default AccountVerificationForm;
