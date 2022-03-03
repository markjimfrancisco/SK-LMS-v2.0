import { useEffect, useState } from "react";
import { usePostHttp } from "../../hooks/postHttp";
import EmailField from "../EmailField";

const EmailDetailComponent = ({setStep}) => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [disable, setDisable] = useState(true);
  const [toSubmit, setToSubmit] = useState(false);

  const [isLoading, data] = usePostHttp(
    toSubmit ? { email: email } : null,
    "/account/forgot-password"
  );

  useEffect(()=>{
    if(data.success)
        setStep(2);
  },[data])

  useEffect(() => {
    if (validEmail) setDisable(false);
    else setDisable(true);
  }, [validEmail]);

  return (
    <>
      <EmailField
        classNames="lg:w-full md:w-full sm:w-full xs:w-3/4 mt-2 rounded-xl border border-lightGray placeholder-lightGray"
        value={email}
        setValue={setEmail}
        placeholder="Email Address"
        to={false}
        endpoint={"/register/verify/email?value="}
        alert={true}
        errorMessage="Email does not exist!"
        setValidEmail={setValidEmail}
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
    </>
  );
};

export default EmailDetailComponent;