import axios from "axios";

const InsertSkillAction = (postForm) => async (dispatch) => {
  try {
    dispatch({ type: "INSERT_SKILL_REQUEST" });
    const token = localStorage.getItem("token");
    const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/skill`, postForm, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    const menu = result.data;
    console.log(menu);
    dispatch({
      type: "INSERT_SKILL_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "INSERT_SKILL_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export default InsertSkillAction;
