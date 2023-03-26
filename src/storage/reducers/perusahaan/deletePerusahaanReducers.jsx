const initialState = {
  data: [],
  isError: null,
  isLoading: true,
};

export const DeletePerusahaanReducers = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_PERUSAHAAN_REQUEST":
      return {
        ...state,
      };
    case "DELETE_PERUSAHAAN_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "DELETE_PERUSAHAAN_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
