const initialState = {
  data: [],
  isError: null,
  isLoading: false,
};

export const GetWorkerReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_WORKER_REQUEST":
      return {
        ...state,
        isLoading: true
      };
    case "GET_WORKER_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case "GET_WORKER_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
