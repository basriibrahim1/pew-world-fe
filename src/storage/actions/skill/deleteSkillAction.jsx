import axios from "axios";

const DeleteSkillAction = (id) => async (dispatch) => {
  try {
    const result = await axios.delete(`${process.env.REACT_APP_SKILL_URL}/${id}`, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "DELETE_SKILL_REQUEST" });
    const menu = result.data;
    console.log(menu);
    dispatch({
      type: "DELETE_SKILL_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_SKILL_FAILURE",
      payload: error.message,
    });
  }
};

export default DeleteSkillAction;
