const initialState = {
  data: [],
  isError: null,
  isLoading: true,
};

export const DeletePengalamanReducers = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_PENGALAMAN_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "DELETE_PENGALAMAN_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "DELETE_PENGALAMAN_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
