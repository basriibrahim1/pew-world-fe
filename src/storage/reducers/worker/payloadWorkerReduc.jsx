const initialState = {
    data: [],
    isError: null,
    isLoading: true,
  };
  
  export const PayloadWorkerReducers = (state = initialState, action) => {
    switch (action.type) {
      case "PAYLOAD_WORKER_REQUEST":
        return {
          ...state,
          isLoading: true
        };
      case "PAYLOAD_WORKER_SUCCESS":
        return {
          ...state,
          data: action.payload,
          isLoading: false,
        };
      case "PAYLOAD_WORKER_FAILURE":
        return {
          ...state,
          isLoading: false,
          isError: action.payload,
        };
      default:
        return state;
    }
  };
  