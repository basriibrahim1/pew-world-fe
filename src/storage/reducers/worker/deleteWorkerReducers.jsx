const initialState = {
  data: [],
  isError: null,
  isLoading: true,
};

export const DeleteWorkerReducers = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_WORKER_REQUEST":
      return {
        ...state,
      };
    case "DELETE_WORKER_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "DELETE_WORKER_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
