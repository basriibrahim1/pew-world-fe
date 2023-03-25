const initialState = {
  data: [],
  isError: null,
  isLoading: false,
};

export const GetPengalamanReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PENGALAMAN_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_PENGALAMAN_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "GET_PENGALAMAN_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
