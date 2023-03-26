const initialState = {
  data: [],
  isError: null,
  isLoading: false,
};

const LoginReduc = (state = initialState, action) => {
  if (action.type === "LOGIN_REQUEST") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "LOGIN_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "LOGIN_FAILED") {
    return {
      ...state,
      isError: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default LoginReduc;
