const initialState = {
  data: [],
  isError: null,
  isLoading: false,
};

export const UpdateWorkerReducers = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_WORKER_REQUEST":
      return {
        ...state,
        isLoading: true,
        data: []
      };
    case "UPDATE_WORKER_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        isError: null
      };
    case "UPDATE_WORKER_FAILURE":
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
