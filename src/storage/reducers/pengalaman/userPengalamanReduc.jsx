const initialState = {
    data: [],
    isError: null,
    isLoading: true,
  };
  
  export const UserPengalamanReducers = (state = initialState, action) => {
    switch (action.type) {
      case "USER_PENGALAMAN_REQUEST":
        return {
          ...state,
          isLoading: true,
          data: []
        };
      case "USER_PENGALAMAN_SUCCESS":
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          isError: null
        };
      case "USER_PENGALAMAN_FAILURE":
        return {
          ...state,
          isLoading: false,
          isError: action.payload,
          data: []
        };
      default:
        return state;
    }
  };
  