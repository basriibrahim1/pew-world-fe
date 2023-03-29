const initialState = {
    data: [],
    isError: null,
    isLoading: false,
  };
  
  const MailReducer = (state = initialState, action) => {
    if (action.type === "SEND_OTP_PENDING") {
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
  
  export default MailReducer;