const initialState = {
  data: [],
  isError: null,
  isLoading: false,
};

export const UpdateChatReducers = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CHAT_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "UPDATE_CHAT_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "UPDATE_CHAT_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
