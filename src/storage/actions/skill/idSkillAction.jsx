import axios from "axios";

const IdSkillAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_SKILL_ID_REQUEST" });
    const result = await axios.get(`${process.env.REACT_APP_SKILL_URL}/skill/${id}`);
    const menu = result.data.data;
    dispatch({
      type: "GET_SKILL_ID_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "GET_SKILL_ID_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export default IdSkillAction;
