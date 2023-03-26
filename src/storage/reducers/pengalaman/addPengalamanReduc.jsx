const initialState = {
  data: [],
  isError: null,
  isLoading: true,
};

export const InsertPengalamanReducers = (state = initialState, action) => {
  switch (action.type) {
    case "INSERT_PENGALAMAN_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "INSERT_PENGALAMAN_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "INSERT_PENGALAMAN_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
