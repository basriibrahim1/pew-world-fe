const initialState = {
  data: [],
  isError: null,
  isLoading: false,
};

export const GetPerusahaanReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PERUSAHAAN_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_PERUSAHAAN_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "GET_PERUSAHAAN_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
