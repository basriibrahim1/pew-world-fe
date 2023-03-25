const initialState = {
  data: [],
  isError: null,
  isLoading: false,
};

export const DeleteChatReducers = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_CHAT_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "DELETE_CHAT_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "DELETE_CHAT_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
