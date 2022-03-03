const DoLogin = (isLogin, user) => {
    return {
      type: "DO_LOGIN",
      payload: {
        isLogin: isLogin,
        data: user
      },
    };
  };
  
  const DoAccountVerification = (verified) => {
    return {
      type: "DO_ACCOUNT_VERIFICATION",
      payload: verified,
    };
  };
  
  const UserLogout = (isLogin) => {
    return {
      type: "USER_LOGOUT",
      payload: {
        isLogin: isLogin,
        data: null,
      },
    };
  };
  
  export {
    DoLogin,
    DoAccountVerification,
    UserLogout,
  };
  