const initialState = {
    data: [],
    isError: null,
    isLoading: true,
  };
  
  const RegisterPerusahaanReduc = (state = initialState, action) => {
    if (action.type === "SEND_OTP_REQUEST") {
      return {
        ...state,
        isLoading: true,
      };
    } else if (action.type === "SEND_OTP_SUCCESS") {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    } else if (action.type === "SEND_OTP_FAILED") {
      return {
        ...state,
        isError: action.payload,
        isLoading: false,
      };
    } else {
      return state;
    }
  };
  
  export default RegisterPerusahaanReduc;
  