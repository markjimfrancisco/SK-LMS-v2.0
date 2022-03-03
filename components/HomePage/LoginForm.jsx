import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { usePostHttp } from "../../hooks/postHttp";
import FieldAlert from "../FieldAlert";
import PasswordInput from "../PasswordInput";
import TextField from "../TextField";

import { DoLogin } from "../../redux/actions/UserAction";
import { signIn, signOut } from "next-auth/client";

const LoginForm = ({ providers, session, showModal, setForm }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserReducer);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [toLogin, setToLogin] = useState(false);
  const [invalidCredential, setInvalidCredential] = useState(false);

  const [loading, userData] = usePostHttp(
    toLogin ? { username, password } : null,
    toLogin ? "/login" : null
  );

  // const [loading, authLoggedInData] = usePostHttp(session ? {session} : null, session ? '/login')

  useEffect(() => {
    if (userData.success) {
      dispatch(DoLogin(true, userData.result[0]));
      // userData.result[0].verified == 1 ? showModal(false) : setForm('account-verification');
    }

    if (typeof userData != "boolean" && !userData.success) {
      setInvalidCredential(true);
      setToLogin(false);
    }
  }, [userData]);

  useEffect(() => {
    if (user.islogin && user.data && user.data.verified) showModal(false);
  }, [user.data]);

  return (
    <>
      <label className="w-full mt-10 text-left font-bold text-4xl text-gray-700">
        Login
      </label>
      <div className="w-full mt-4 flex items-center justify-around">
        {/* {providers['facebook'] && (
          <button onClick={() => {signIn(providers['facebook'].id)}} className="w-44 flex items-center justify-center border text-xl text-subheading p-4 rounded-full">
            <svg
              viewBox="0 0 24 24"
              className={"fill-current h-8 w-8 text-skBlue"}
            >
              <path d="M18,2h-3c-2.8,0-5,2.2-5,5v3H7v4h3v8h4v-8h3l1-4h-4V7c0-0.6,0.4-1,1-1h3V2z" />
            </svg>
            Facebook
          </button>
        )} */}
        {providers &&
          Object.values(providers).map((provider) => {
            if (provider.name === "Facebook")
              return (
                <button
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="w-44 flex items-center justify-center border text-xl text-subheading p-4 rounded-full"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className={"fill-current h-8 w-8 text-skBlue"}
                  >
                    <path d="M18,2h-3c-2.8,0-5,2.2-5,5v3H7v4h3v8h4v-8h3l1-4h-4V7c0-0.6,0.4-1,1-1h3V2z" />
                  </svg>
                  Facebook
                </button>
              );
          })}
        {/* <button className="w-44 flex items-center text-center justify-center border text-xl text-subheading p-4 rounded-full">
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            id="_24x24_On_Light_Google"
            data-name="24x24/On Light/Google"
          >
            <defs>
              <clipPath id="clip-path">
                <path
                  id="a"
                  d="M17.791,7.364H9.209v3.477h4.94c-.46,2.209-2.386,3.477-4.94,3.477A5.37,5.37,0,0,1,3.767,9,5.442,5.442,0,0,1,12.6,4.868L15.279,2.25A9.29,9.29,0,0,0,9.209,0,9.08,9.08,0,0,0,0,9a9.08,9.08,0,0,0,9.209,9A8.586,8.586,0,0,0,18,9,7.306,7.306,0,0,0,17.791,7.364Z"
                  fill="none"
                />
              </clipPath>
            </defs>
            <rect id="view-box" width="24" height="24" fill="none" />
            <g id="Logo" transform="translate(3 3)">
              <g id="Clipped">
                <path
                  id="a-5"
                  data-name="a"
                  d="M17.791,7.364H9.209v3.477h4.94c-.46,2.209-2.386,3.477-4.94,3.477A5.37,5.37,0,0,1,3.767,9,5.442,5.442,0,0,1,12.6,4.868L15.279,2.25A9.29,9.29,0,0,0,9.209,0,9.08,9.08,0,0,0,0,9a9.08,9.08,0,0,0,9.209,9A8.586,8.586,0,0,0,18,9,7.306,7.306,0,0,0,17.791,7.364Z"
                  fill="none"
                />
                <g
                  id="Clipped-2"
                  data-name="Clipped"
                  clipPath="url(#clip-path)"
                >
                  <path
                    id="Path"
                    d="M0,10.636V0L7.116,5.318Z"
                    transform="translate(-0.837 3.682)"
                    fill="#fbbc05"
                  />
                </g>
              </g>
              <g id="Clipped-3" data-name="Clipped">
                <path
                  id="a-6"
                  data-name="a"
                  d="M17.791,7.364H9.209v3.477h4.94c-.46,2.209-2.386,3.477-4.94,3.477A5.37,5.37,0,0,1,3.767,9,5.442,5.442,0,0,1,12.6,4.868L15.279,2.25A9.29,9.29,0,0,0,9.209,0,9.08,9.08,0,0,0,0,9a9.08,9.08,0,0,0,9.209,9A8.586,8.586,0,0,0,18,9,7.306,7.306,0,0,0,17.791,7.364Z"
                  fill="none"
                />
                <g
                  id="Clipped-4"
                  data-name="Clipped"
                  clipPath="url(#clip-path)"
                >
                  <path
                    id="Path-2"
                    data-name="Path"
                    d="M0,4.5,7.116,9.818l2.93-2.5,10.047-1.6V0H0Z"
                    transform="translate(-0.837 -0.818)"
                    fill="#ea4335"
                  />
                </g>
              </g>
              <g id="Clipped-5" data-name="Clipped">
                <path
                  id="a-7"
                  data-name="a"
                  d="M17.791,7.364H9.209v3.477h4.94c-.46,2.209-2.386,3.477-4.94,3.477A5.37,5.37,0,0,1,3.767,9,5.442,5.442,0,0,1,12.6,4.868L15.279,2.25A9.29,9.29,0,0,0,9.209,0,9.08,9.08,0,0,0,0,9a9.08,9.08,0,0,0,9.209,9A8.586,8.586,0,0,0,18,9,7.306,7.306,0,0,0,17.791,7.364Z"
                  fill="none"
                />
                <g
                  id="Clipped-6"
                  data-name="Clipped"
                  clipPath="url(#clip-path)"
                >
                  <path
                    id="Path-3"
                    data-name="Path"
                    d="M0,15.136,12.558,5.727l3.307.409L20.093,0V19.636H0Z"
                    transform="translate(-0.837 -0.818)"
                    fill="#34a853"
                  />
                </g>
              </g>
              <g id="Clipped-7" data-name="Clipped">
                <path
                  id="a-8"
                  data-name="a"
                  d="M17.791,7.364H9.209v3.477h4.94c-.46,2.209-2.386,3.477-4.94,3.477A5.37,5.37,0,0,1,3.767,9,5.442,5.442,0,0,1,12.6,4.868L15.279,2.25A9.29,9.29,0,0,0,9.209,0,9.08,9.08,0,0,0,0,9a9.08,9.08,0,0,0,9.209,9A8.586,8.586,0,0,0,18,9,7.306,7.306,0,0,0,17.791,7.364Z"
                  fill="none"
                />
                <g
                  id="Clipped-8"
                  data-name="Clipped"
                  clipPath="url(#clip-path)"
                >
                  <path
                    id="Path-4"
                    data-name="Path"
                    d="M14.651,15.136,1.674,5.318,0,4.091,14.651,0Z"
                    transform="translate(4.605 3.682)"
                    fill="#4285f4"
                  />
                </g>
              </g>
            </g>
          </svg>
          Google
        </button> */}
      </div>
      <p className="mt-5 text-xl text-subheading">or</p>
      <TextField
        classNames="w-full mt-5 rounded-xl border border-lightGray placeholder-lightGray"
        placeholder="Username"
        value={username}
        setValue={setUsername}
        alert={false}
      />
      <PasswordInput
        wrapperClassName="w-full mt-2 flex rounded-xl"
        textFieldClassName="m-auto border-lightGray rounded-xl placeholder-lightGray"
        classNames="lg:w-full md:w-full sm:w-full xs:w-3/4 xxs:w-3/4 mt-2 rounded-xl border border-lightGray placeholder-lightGray"
        iconTop={"top-2"}
        value={password}
        setValue={setPassword}
        placeholder="Password"
      />
      {invalidCredential && (
        <FieldAlert
          classNames="w-full mt-2 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          message="Invalid username or password!"
        />
      )}
      <a
        onClick={() => {
          setForm("forgot-password");
        }}
        className="mt-4 self-end font-bold text-skBlue cursor-pointer"
      >
        Forgot Password?
      </a>
      <button
        onClick={() => {
          setToLogin(true);
        }}
        className="bg-blue-500 text-white text-xl font-semibold w-full mt-10 py-3 rounded-full disabled:opacity-50"
      >
        Login
      </button>
      <a
        onClick={() => {
          setForm("signup");
        }}
        className="text-gray-500 mt-6 cursor-pointer"
      >
        Don't have an account?{" "}
        <span className="text-blue-400 font-bold">Sign Up.</span>
      </a>
    </>
  );
};

export default LoginForm;
