const initialState = {
  data: [],
  isError: null,
  isLoading: false,
};

export const UpdateSkillReducers = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SKILL_REQUEST":
      return {
        ...state,
        isLoading: true
      };
    case "UPDATE_SKILL_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "UPDATE_SKILL_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
