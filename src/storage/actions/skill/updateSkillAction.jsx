import axios from "axios";

const UpdateSkillAction = (id, editForm) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_SKILL_REQUEST" });
    const token = localStorage.getItem("token");
    const result = await axios.put(`${process.env.REACT_APP_BASE_URL}/skill/${id}`, editForm, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const menu = result.data.data;
    console.log(menu);
    dispatch({
      type: "UPDATE_SKILL_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_SKILL_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export default UpdateSkillAction;
