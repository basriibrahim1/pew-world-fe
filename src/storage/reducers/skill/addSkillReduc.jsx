const initialState = {
  data: [],
  isError: null,
  isLoading: false,
};

export const InsertSkillReducers = (state = initialState, action) => {
  switch (action.type) {
    case "INSERT_SKILL_REQUEST":
      return {
        ...state,
        isLoading: true
      };
    case "INSERT_SKILL_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "INSERT_SKILL_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
