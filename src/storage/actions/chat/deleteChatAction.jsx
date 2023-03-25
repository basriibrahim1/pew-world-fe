import axios from "axios";

const DeleteChatAction = (id) => async (dispatch) => {
  try {
    const result = await axios.delete(`${process.env.REACT_APP_CHAT_URL}/${id}`, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "DELETE_CHAT_REQUEST" });
    const menu = result.data;
    console.log(menu);
    dispatch({
      type: "DELETE_CHAT_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_CHAT_FAILURE",
      payload: error.message,
    });
  }
};

export default DeleteChatAction;
