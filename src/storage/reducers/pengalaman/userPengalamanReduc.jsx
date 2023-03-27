const initialState = {
    data: [],
    isError: null,
    isLoading: false,
  };
  
  export const UserPengalamanReducers = (state = initialState, action) => {
    switch (action.type) {
      case "USER_PENGALAMAN_REQUEST":
        return {
          ...state,
          isLoading: true,
        };
      case "USER_PENGALAMAN_SUCCESS":
        return {
          ...state,
          data: action.payload,
          isLoading: false,
        };
      case "USER_PENGALAMAN_FAILURE":
        return {
          ...state,
          isLoading: false,
          isError: action.payload,
        };
      default:
        return state;
    }
  };
  