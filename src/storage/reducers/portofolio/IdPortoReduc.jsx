const initialState = {
  data: [],
  isError: null,
  isLoading: true,
};

export const IdPortoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PORTO_ID_REQUEST":
      return {
        ...state,
      };
    case "GET_PORTO_ID_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "GET_PORTO_ID_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
