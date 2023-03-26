const initialState = {
  data: [],
  isError: null,
  isLoading: true,
};

export const UpdatePerusahaanReducers = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PERUSAHAAN_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "UPDATE_PERUSAHAAN_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "UPDATE_PERUSAHAAN_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
