import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePostHttp } from "../../hooks/postHttp";
import ConfirmPasswordInput from "../ConfirmPasswordInput";
import PasswordInput from "../PasswordInput";

import { DoLogin } from "../../redux/actions/UserAction";

const ResetPasswordComponent = ({ showModal, code, setForm }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserReducer);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disable, setDisable] = useState(true);
  const [toSubmit, setToSubmit] = useState(false);

  const [isLoading, data] = usePostHttp(
    toSubmit ? { code: code, password: password } : null,
    "/account/reset-password"
  );

  useEffect(() => {
    if (password != "" && password == confirmPassword) setDisable(false);
    else setDisable(true);
  }, [password, confirmPassword]);

  useEffect(() => {
    if (data.success){ 
      dispatch(DoLogin(true, data.result));
      // data.result.verified ? showModal(false) : setForm('account-verification');
    }
    else setToSubmit(false);
  }, [data]);

  useEffect(() => {
    if(user.data && setModal)
      setModal(false);
  }, [user.data]);

  return (
    <>
      <PasswordInput
        wrapperClassName="w-11/12 mt-2 flex rounded-xl"
        textFieldClassName="m-auto border-lightGray rounded-xl placeholder-lightGray"
        alert={true}
        alertClassName="w-11/12 mt-2 px-4 py-3 rounded"
        alertValidStyle="border border-green-400 text-green-700"
        alertInvalidStyle="border border-red-400 text-red-700"
        iconTop={'top-2'}
        classNames="lg:w-full md:w-full sm:w-full xs:w-3/4 mt-2 rounded-xl border border-lightGray placeholder-lightGray"
        value={password}
        setValue={setPassword}
        placeholder="Password"
      />
      <ConfirmPasswordInput
        wrapperClassName="w-11/12 mt-2 flex rounded-xl"
        textFieldClassName="m-auto border-lightGray rounded-xl placeholder-lightGray"
        classNames="lg:w-full md:w-full sm:w-full xs:w-3/4 mt-2 rounded-xl border border-lightGray placeholder-lightGray"
        iconTop={'top-2'}
        value={confirmPassword}
        setValue={setConfirmPassword}
        password={password}
        placeholder="Re-enter your password"
      />
      <button
        disabled={disable ? true : false}
        onClick={() => {
          setToSubmit(true);
        }}
        className="bg-blue-500 text-white text-xl font-semibold w-11/12 mt-10 py-3 rounded-full disabled:opacity-50"
      >
        Submit
      </button>
    </>
  );
};

export default ResetPasswordComponent;
