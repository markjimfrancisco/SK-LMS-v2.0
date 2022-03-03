import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import EmailDetailComponent from "./EmailDetailComponent";
import ResetPasswordComponent from "./ResetPasswordComponent";
import CodeVerificationComponent from "./CodeVerificationComponent";

const SignupForm = ({ showModal, code, setForm }) => {
  const [validEmail, setValidEmail] = useState(false);
  const [disable, setDisable] = useState(true);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (validEmail) setDisable(false);
    else setDisable(true);
  }, [validEmail]);

  return (
    <>
      <label className="w-11/12 lg:mt-10 md:mt-10 sm:mt-4 xs:mt-4 text-left font-bold lg:text-4xl md:text-4xl sm:text-xl xs:text-xl text-gray-700">
        Forgot Password
      </label>
      <div className="flex items-center w-11/12 lg:mt-10 md:mt-10 sm:mt-4 xs:mt-4 space-x-4">
        <label className="lg:w-full md:w-3/4 sm:w-full xs:w-3/4 text-left text-lg  font-semibold text-subheading">
          {step == 1 && !code && "Email Detail"}
          {step == 2 && !code && "Verify Code"}
          {(step == 3 || code) && "Reset Password"}
        </label>
      </div>
      <div className="w-11/12 flex space-x-2 my-4">
        <div
          className={`${
            step > 0 ? "bg-skBlue" : "bg-skBlueInactive"
          } h-1 w-full rounded-xl`}
        ></div>
        <div
          className={`${
            step > 1 || code ? "bg-skBlue" : "bg-skBlueInactive"
          } h-1 w-full rounded-xl`}
        ></div>
        <div
          className={`${
            step == 3 || code ? "bg-skBlue" : "bg-skBlueInactive"
          } h-1 w-full rounded-xl`}
        ></div>
      </div>
      {/* //Make this mudolar */}

      {step == 1 && !code && <EmailDetailComponent setStep={setStep} />}
      {step == 2 && !code && <CodeVerificationComponent setStep={setStep} />}
      {(step == 3 || code) && <ResetPasswordComponent showModal={showModal} setForm={setForm} code={code} setStep={setStep} />}
      <a
        onClick={() => {
          setForm("login");
        }}
        className="text-gray-500 mt-6 cursor-pointer"
      >
        Already have an account?{" "}
        <span className="text-blue-400 font-bold">Login.</span>
      </a>
    </>
  );
};

export default SignupForm;
