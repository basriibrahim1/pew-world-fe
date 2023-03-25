import axios from "axios";

const IdSkillAction = (id) => async (dispatch) => {
  try {
    const result = await axios.get(`${process.env.REACT_APP_SKILL_URL}/${id}`);
    dispatch({ type: "GET_SKILL_ID_REQUEST" });
    const menu = result.data;
    console.log(menu);
    dispatch({
      type: "GET_SKILL_ID_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "GET_SKILL_ID_FAILURE",
      payload: error.message,
    });
  }
};

export default IdSkillAction;
