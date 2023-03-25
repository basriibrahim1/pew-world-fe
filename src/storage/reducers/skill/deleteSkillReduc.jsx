const initialState = {
  data: [],
  isError: null,
  isLoading: false,
};

export const DeleteSkillReducers = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_SKILL_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "DELETE_SKILL_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "DELETE_SKILL_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
