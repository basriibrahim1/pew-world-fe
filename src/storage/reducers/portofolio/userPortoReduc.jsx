const initialState = {
    data: [],
    isError: null,
    isLoading: true,
  };
  
  export const UserPortoReducers = (state = initialState, action) => {
    switch (action.type) {
      case "USER_PORTO_REQUEST":
        return {
          ...state,
        };
      case "USER_PORTO_SUCCESS":
        return {
          ...state,
          data: action.payload,
          isLoading: false,
        };
      case "USER_PORTO_FAILURE":
        return {
          ...state,
          isLoading: false,
          isError: action.payload,
        };
      default:
        return state;
    }
  };
  