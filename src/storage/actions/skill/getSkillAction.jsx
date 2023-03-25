import axios from "axios";

const GetSkillAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_SKILL_REQUEST" });
    const result = await axios.get(`${process.env.REACT_APP_SKILL_URL}`);
    const menu = result.data;
    dispatch({ type: "GET_SKILL_SUCCESS", payload: menu });
  } catch (error) {
    dispatch({
      type: "GET_SKILL_FAILURE",
      payload: error.message,
    });
  }
};

export default GetSkillAction;
