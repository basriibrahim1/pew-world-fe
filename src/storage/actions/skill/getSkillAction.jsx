import axios from "axios";

const GetSkillAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_SKILL_REQUEST" });
    const token = localStorage.getItem("token");
    const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/skill/myskill`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const menu = result.data.data;
    dispatch({ type: "GET_SKILL_SUCCESS", payload: menu });
  } catch (error) {
    dispatch({
      type: "GET_SKILL_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export default GetSkillAction;
