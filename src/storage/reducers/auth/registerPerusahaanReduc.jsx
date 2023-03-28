const initialState = {
  data: [],
  isError: null,
  isLoading: false,
};

const RegisterPerusahaanReduc = (state = initialState, action) => {
  if (action.type === "REGISTER_PERUSAHAAN_REQUEST") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "REGISTER_PERUSAHAAN_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "REGISTER_PERUSAHAAN_FAILED") {
    return {
      ...state,
      isError: action.payload,
      isLoading: false,
    };  
  } else {
    return state;
  }
};

export default RegisterPerusahaanReduc;
