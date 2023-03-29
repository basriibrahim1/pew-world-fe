const initialState = {
  data: [],
  isError: null,
  isLoading: false,
};

const OtpReducers = (state = initialState, action) => {
  if (action.type === "CHECK_OTP_REQUEST") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "CHECK_OTP_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "CHECK_OTP_FAILED") {
    return {
      ...state,
      isError: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default OtpReducers;