const initialState = {
  data: [],
  isError: null,
  isLoading: false,
};

export const IdWorkerReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_WORKER_ID_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_WORKER_ID_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "GET_WORKER_ID_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
