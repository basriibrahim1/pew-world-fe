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
          isLoading: true,
          data: []
        };
      case "USER_PORTO_SUCCESS":
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          isError: null,
        };
      case "USER_PORTO_FAILURE":
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
  