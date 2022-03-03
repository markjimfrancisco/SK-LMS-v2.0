import { useEffect, useState } from "react";
import UsernameField from "../UsernameField";
import EmailField from "../EmailField";
import TextField from "../TextField";
import ConfirmPasswordInput from "../ConfirmPasswordInput";
import PasswordInput from "../PasswordInput";
import { usePostHttp } from "../../hooks/postHttp";
import { DoLogin } from "../../redux/actions/UserAction";
import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const SignupDetailsComponents = ({
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  firstName,
  middleName,
  lastName,
  mobileno,
  month,
  day,
  year,
  gender,
  school,
  other,
  gradeLevel,
  favoriteSubject,
  careerGoal,
  setForm,
}) => {
  const router = useRouter();

  const user = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  const [validEmail, setValidEmail] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [userAgree, setUserAgree] = useState(false);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (
      (username,
      password != "" &&
        password == confirmPassword &&
        email &&
        firstName &&
        middleName &&
        lastName &&
        mobileno &&
        typeof month === "number" &&
        typeof day === "number" &&
        typeof year === "number" &&
        gender &&
        school &&
        gradeLevel &&
        favoriteSubject &&
        careerGoal &&
        userAgree)
    )
      setDisable(false);
    else setDisable(true);

    if (
      username &&
      firstName &&
      middleName &&
      lastName &&
      mobileno &&
      typeof month === "number" &&
      typeof day === "number" &&
      typeof year === "number" &&
      gender &&
      school &&
      gradeLevel &&
      favoriteSubject &&
      careerGoal &&
      userAgree
    )
      setDisable(false);
    else setDisable(true);
  });

  const [creatingAccount, userData] = usePostHttp(
    !user.isLogin && createAccount
      ? {
          username,
          email,
          password,
          firstName,
          middleName,
          lastName,
          mobileno,
          gender,
          dateofbirth: `${year}-${month + 1}-${day}`,
          school,
          other,
          gradeLevel,
          favoriteSubject,
          careerGoal,
        }
      : null,
    "/register/student"
  );

  const [creatingAuthAccount, userAuthData] = usePostHttp(
    user.isLogin && !user.data.username && createAccount
      ? {
          studentid: user.data.id,
          userid: user.data.userid,
          username,
          firstName,
          middleName,
          lastName,
          mobileno,
          gender,
          dateofbirth: `${year}-${month + 1}-${day}`,
          school,
          other,
          gradeLevel,
          favoriteSubject,
          careerGoal,
        }
      : null,
    "/register/auth/student"
  );

  useEffect(() => {
    if (userData.success) {
      dispatch(DoLogin(true, userData.result[0]));
      setForm("account-verification");
      // router.push('https://drive.google.com/drive/folders/1JAKiumWmxsYbFoz5p97DtG9y3mzUDYxy');
    }
  }, [userData]);

  useEffect(() => {
    if (userAuthData.success) {
      dispatch(DoLogin(true, userAuthData.result));
      setForm("account-verification");
      // router.push('https://drive.google.com/drive/folders/1JAKiumWmxsYbFoz5p97DtG9y3mzUDYxy');
    }
  }, [userAuthData]);

  return (
    <>
      {!user.isLogin && (
        <EmailField
          classNames="lg:w-full md:w-full sm:w-full xs:w-11/12 xxs:w-11/12 mt-2 xs:h-8 xxs:h-8 rounded-xl border border-lightGray placeholder-lightGray"
          value={email}
          setValue={setEmail}
          placeholder="Email Address"
          to={true}
          endpoint={"/register/verify/email?value="}
          alert={true}
          errorMessage="Email already been taken!"
          setValidEmail={setValidEmail}
        />
      )}

      <UsernameField
        classNames="lg:w-full md:w-full sm:w-full xs:w-11/12 xxs:w-11/12 mt-2 xs:h-8 xxs:h-8 rounded-xl border border-lightGray placeholder-lightGray"
        value={username}
        setValue={setUsername}
        placeholder="Username"
      />

      {!user.isLogin && (
        <>
          <PasswordInput
            wrapperClassName="lg:w-full md:w-full sm:w-full xs:w-11/12 xxs:w-11/12 mt-2 xs:h-8 xxs:h-8 flex rounded-xl"
            textFieldClassName="m-auto xs:h-8 xxs:h-8 border-lightGray rounded-xl placeholder-lightGray"
            alert={true}
            alertClassName="lg:w-full md:w-full sm:w-full xs:w-11/12 xxs:w-11/12 lg:mt-2 md:mt-2 sm:mt-4 xs:mt-4 xxs:mt-4 px-4 py-3 rounded"
            alertValidStyle="border border-green-400 text-green-700"
            alertInvalidStyle="border border-red-400 text-red-700"
            iconTop={"top-1"}
            classNames="lg:w-full md:w-full sm:w-full xs:w-11/12 md:w-full sm:w-full xs:w-11/12 xxs:w-11/12 mt-2 rounded-xl border border-lightGray placeholder-lightGray"
            value={password}
            setValue={setPassword}
            placeholder="Password"
          />
          <ConfirmPasswordInput
            wrapperClassName="lg:w-full md:w-full sm:w-full xs:w-11/12 xxs:w-11/12 mt-2 xs:h-8 xxs:h-8 flex rounded-xl"
            textFieldClassName="xs:h-8 xxs:h-8 m-auto border-lightGray rounded-xl placeholder-lightGray"
            classNames="lg:w-full md:w-full sm:w-full xs:w-11/12 xxs:w-11/12 mt-2 rounded-xl border border-lightGray placeholder-lightGray"
            iconTop={"top-1"}
            value={confirmPassword}
            setValue={setConfirmPassword}
            password={password}
            placeholder="Re-enter your password"
          />
        </>
      )}
      <div className="lg:w-full md:w-full sm:w-full xs:w-11/12 xxs:w-11/12 mt-2 lg:mb-0 md:mb-0 sm:mb-4 xs:mb-4 xs:h-8 xxs:h-8 flex items-center space-x-2">
        <input
          id="agree"
          onChange={(e) => setUserAgree(e.target.checked)}
          type="checkbox"
          name="useragree"
        />
        <label
          for="useragree"
          className="text-lightGray xs:text-sm xxs:text-sm hover:text-subheading"
        >
          I agree to the&nbsp;
          <Link href="/terms-and-policy?terms=true">
            <a className="text-skBlueInactive hover:text-skBlue">
              Terms of Service
            </a>
          </Link>
          &nbsp;and&nbsp;
          <Link href="/terms-and-policy?policy=true">
            <a className="text-skBlueInactive hover:text-skBlue">
              Privacy Policy
            </a>
          </Link>
        </label>
      </div>
      <button
        disabled={disable ? true : false}
        onClick={() => {
          setCreateAccount(true);
        }}
        className="bg-blue-500 text-white text-xl font-semibold lg:w-full md:w-full sm:w-full xs:w-11/12 xxs:w-11/12 lg:mt-10 md:mt-10 sm:mt-2 py-3 rounded-full disabled:opacity-50"
      >
        Submit
      </button>
    </>
  );
};

export default SignupDetailsComponents;
