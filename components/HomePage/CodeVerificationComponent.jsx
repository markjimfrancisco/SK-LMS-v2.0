import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { usePostHttp } from "../../hooks/postHttp";
import CodeInputField from "../CodeInputField";
import EmailField from "../EmailField";

const CodeVerificationComponent = ({setStep}) => {
  const router = useRouter();

  const [code, setCode] = useState("");
  const [validCode, setValidCode] = useState(false);
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
    if (validCode) setDisable(false);
    else setDisable(true);
  }, [validCode]);

  return (
    <>
      <CodeInputField
        classNames="lg:w-full md:w-full sm:w-full xs:w-3/4 mt-2 rounded-xl border border-lightGray placeholder-lightGray"
        value={code}
        setValue={setCode}
        placeholder="Verification Code"
        to={false}
        endpoint={`/account/forgot-password/verify/code?value=`}
        alert={true}
        errorMessage="Code does not exist!"
        setValidCode={setValidCode}
      />
      <button
        disabled={disable ? true : false}
        onClick={() => {
          router.push(`?code=${code}`, undefined, {shallow:true})
        }}
        className="bg-blue-500 text-white text-xl font-semibold w-full mt-10 py-3 rounded-full disabled:opacity-50"
      >
        Submit
      </button>
    </>
  );
};

export default CodeVerificationComponent;