const initialState = {
  data: null,
  errorMessage: null,
  isLoading: false,
};

const LoginWrokerReduc = (state = initialState, action) => {
  if (action.type === "WORKER_LOGIN_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "WORKER_LOGIN_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "WORKER_LOGIN_FAILED") {
    return {
      ...state,
      errorMessage: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default LoginWrokerReduc;
