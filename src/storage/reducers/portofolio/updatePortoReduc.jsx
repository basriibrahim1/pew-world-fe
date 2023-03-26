const initialState = {
  data: [],
  isError: null,
  isLoading: true,
};

export const UpdatePortoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PORTO_REQUEST":
      return {
        ...state,
      };
    case "UPDATE_PORTO_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "UPDATE_PORTO_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
