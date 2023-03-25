import axios from "axios";

const GetChatAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_CHAT_REQUEST" });
    const result = await axios.get(`${process.env.REACT_APP_CHAT_URL}`);
    const menu = result.data;
    dispatch({ type: "GET_CHAT_SUCCESS", payload: menu });
  } catch (error) {
    dispatch({
      type: "GET_CHAT_FAILURE",
      payload: error.message,
    });
  }
};

export default GetChatAction;
