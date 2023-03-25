import axios from "axios";

const UpdateSkillAction = (id, editForm) => async (dispatch) => {
  try {
    const result = await axios.put(`${process.env.REACT_APP_SKILL_URL}/${id}`, editForm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "UPDATE_SKILL_REQUEST" });
    const menu = result.data;
    console.log(menu);
    dispatch({
      type: "UPDATE_SKILL_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_SKILL_FAILURE",
      payload: error.message,
    });
  }
};

export default UpdateSkillAction;
