import axios from "axios";

const IdChatAction = (id) => async (dispatch) => {
  try {
    const result = await axios.get(`${process.env.REACT_APP_CHAT_URL}/${id}`);
    dispatch({ type: "GET_CHAT_ID_REQUEST" });
    const menu = result.data;
    console.log(menu);
    dispatch({
      type: "GET_CHAT_ID_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "GET_CHAT_ID_FAILURE",
      payload: error.message,
    });
  }
};

export default IdChatAction;
