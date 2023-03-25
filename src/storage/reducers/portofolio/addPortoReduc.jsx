const initialState = {
  data: [],
  isError: null,
  isLoading: false,
};

export const InsertPortoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "INSERT_PORTO_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "INSERT_PORTO_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "INSERT_PORTO_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
