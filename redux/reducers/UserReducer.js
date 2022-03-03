const initState = {
    isLogin: false,
    data: null,
    updatePersonalInformation: false,
    updateShippingInformation: false,
  };
  
  export default function UserState(state = initState, action) {
    switch (action.type) {
      case "DO_LOGIN":
        return {
          ...state,
          isLogin: action.payload.isLogin,
          data: action.payload.data
        };

      case 'DO_ACCOUNT_VERIFICATION':
        return {
          ...state,
          data: {
            ...state.data,
            verified: action.payload
          }
        };
        
      case "USER_LOGOUT":
        return {
          ...state,
          isLogin: action.payload.isLogin,
        };
  
      default:
        return state;
    }
  }
  