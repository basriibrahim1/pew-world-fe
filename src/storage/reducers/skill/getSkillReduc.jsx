const initialState = {
  data: [],
  isError: null,
  isLoading: false,
};

export const GetSkillReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SKILL_REQUEST":
      return {
        ...state,
        isLoading: true
      };
    case "GET_SKILL_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "GET_SKILL_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
