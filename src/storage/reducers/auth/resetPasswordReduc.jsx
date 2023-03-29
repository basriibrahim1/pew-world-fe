const initialState = {
    data: [],
    isError: null,
    isLoading: false,
  };
  
  const ResetPasswordReduc = (state = initialState, action) => {
    if (action.type === "RESET_PASSWORD_REQUEST") {
      return {
        ...state,
        isLoading: true,
      };
    } else if (action.type === "RESET_PASSWORD_SUCCESS") {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    } else if (action.type === "RESET_PASSWORD_FAILED") {
      return {
        ...state,
        isError: action.payload,
        isLoading: false,
      };
    } else {
      return state;
    }
  };
  
  export default ResetPasswordReduc;
  