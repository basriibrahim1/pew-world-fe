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
        data: []
      };
    case "GET_WORKER_ID_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: null
      };
    case "GET_WORKER_ID_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
        data: []
      };
    default:
      return state;
  }
};
