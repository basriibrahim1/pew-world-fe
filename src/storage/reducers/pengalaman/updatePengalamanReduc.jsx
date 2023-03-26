const initialState = {
  data: [],
  isError: null,
  isLoading: true,
};

export const UpdatePengalamanReducers = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PENGALAMAN_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "UPDATE_PENGALAMAN_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "UPDATE_PENGALAMAN_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
