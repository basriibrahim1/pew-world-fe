const initialState = {
  data: [],
  isError: null,
  isLoading: true,
};

const LoginWorkerReduc = (state = initialState, action) => {
  if (action.type === "LOGIN_WORKER_REQUEST") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "LOGIN_WORKER_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "LOGIN_WORKER_FAILED") {
    return {
      ...state,
      isError: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default LoginWorkerReduc;
