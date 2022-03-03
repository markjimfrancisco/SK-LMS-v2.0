import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginHook } from "../../hooks/loginHook";
import { usePostHttp } from "../../hooks/postHttp";
import { DoLogin } from "../../redux/actions/UserAction";

const LoginModal = (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toLogin, setToLogin] = useState(false);

  const [loading, userData] = useLoginHook(
    toLogin ? { username, password } : null,
    "/login"
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    setToLogin(true);
  };

  useEffect(() => {
    if (userData.success) {
      dispatch(DoLogin(true, userData.result[0]));
      setToLogin(false);
      userData.result[0].verified ? props.showModal(false) : props.setForm('account-verification');
    }
    if (typeof userData != "boolean" && !userData.success) {
      // setInvalidCredential(true);
      setToLogin(false);
    }
  }, [userData]);

  return (
    <div
      style={{ background: "rgba(238, 238, 238, 0.5)" }}
      className="fixed h-screen flex w-full z-50"
    >
      <div className="w-11/12 bg-white h-4/5 inset-0 m-auto flex rounded-2xl  animate__animated animate__fadeInDown">
        <div
          className="rounded-l-2xl w-1/2 relative overflow-hidden"
        >
          <img
            className="w-full h-full rounded-2xl"
            src="/images/secondary-hero.svg"
          />
        </div>
        <div className="w-1/2 relative">
          <svg
            onClick={(e) => props.showModal(false)}
            className="absolute right-0 w-8 h-8 mr-4 mt-4 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="w-full h-full flex justify-center align-center"
          >
            <div className="flex items-center">
              <div className="w-full flex items-center flex-col">
                <div className="lg:w-96 md:w-80 flex items-center">
                  <img className="w-16 " src="/images/logo.png" />
                  <p className="text-gray-500 text-3xl">
                    Stock{" "}
                    <span className="text-blue-500 font-bold">Knowledge</span>
                  </p>
                </div>
                <label className="w-full mt-10 text-left font-bold text-4xl text-gray-700">
                  Login
                </label>
                <input
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  className="w-full mt-4 border-none bg-gray-100 rounded-xl"
                  name="username"
                  type="text"
                  placeholder="Username"
                />
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="lg:w-full md:w-full mt-2 border-none bg-gray-100 rounded-xl"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <div className="w-full mt-2 flex items-center justify-end">
                  {/* <div className="flex items-center space-x-2">
                    <input type="checkbox" name="rememberpassowrd" />
                    <label className="text-gray-500" for="rememberpassword">
                      Remember me?
                    </label>
                  </div> */}
                  <a className="font-bold text-blue-500">Forgot Password?</a>
                </div>
                <input
                  className="bg-blue-500 text-white text-2xl font-bold w-full mt-10 py-3 rounded-full"
                  type="submit"
                  value="Login"
                />
                <Link href="/lms/sign-up">
                  <a className="text-gray-500 mt-6">
                    Don't have an account?{" "}
                    <span className="text-blue-400 font-bold">Sign Up.</span>
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
