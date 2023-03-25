const initialState = {
  data: [],
  isError: null,
  isLoading: false,
};

export const DeletePortoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_PORTO_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "DELETE_PORTO_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "DELETE_PORTO_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
