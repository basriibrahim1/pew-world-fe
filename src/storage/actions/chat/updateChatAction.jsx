import axios from "axios";

const UpdateChatAction = (id, editForm) => async (dispatch) => {
  try {
    const result = await axios.put(`${process.env.REACT_APP_CHAT_URL}/${id}`, editForm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "UPDATE_CHAT_REQUEST" });
    const menu = result.data;
    console.log(menu);
    dispatch({
      type: "UPDATE_CHAT_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_CHAT_FAILURE",
      payload: error.message,
    });
  }
};

export default UpdateChatAction;
