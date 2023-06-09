const initialState = {
  data: [],
  isError: null,
  isLoading: false,
};

const RegisterWorkerReduc = (state = initialState, action) => {
  if (action.type === "REGISTER_WORKER_REQUEST") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "REGISTER_WORKER_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "REGISTER_WORKER_FAILED") {
    return {
      ...state,
      isError: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default RegisterWorkerReduc;
