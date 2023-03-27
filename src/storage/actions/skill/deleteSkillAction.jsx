import axios from "axios";

const DeleteSkillAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_SKILL_REQUEST" });
    const token = localStorage.getItem("token");
    const result = await axios.delete(`${process.env.REACT_APP_BASE_URL}/skill/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const menu = result.data;
    dispatch({
      type: "DELETE_SKILL_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_SKILL_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export default DeleteSkillAction;
