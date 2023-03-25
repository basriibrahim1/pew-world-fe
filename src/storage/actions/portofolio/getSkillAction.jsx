import axios from "axios";

const GetPortoAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_PORTO_REQUEST" });
    const result = await axios.get(`${process.env.REACT_APP_PORTO_URL}`);
    const menu = result.data;
    dispatch({ type: "GET_PORTO_SUCCESS", payload: menu });
  } catch (error) {
    dispatch({
      type: "GET_PORTO_FAILURE",
      payload: error.message,
    });
  }
};

export default GetPortoAction;
