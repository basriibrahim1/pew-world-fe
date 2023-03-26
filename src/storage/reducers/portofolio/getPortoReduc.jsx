const initialState = {
  data: [],
  isError: null,
  isLoading: true,
};

export const GetPortoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PORTO_REQUEST":
      return {
        ...state,
      };
    case "GET_PORTO_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "GET_PORTO_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
