import axios from "axios";

const GetPengalamanAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_PENGALAMAN_REQUEST" });
    const result = await axios.get(`${process.env.REACT_APP_PENGALAMAN_URL}`);
    const menu = result.data;
    dispatch({ type: "GET_PENGALAMAN_SUCCESS", payload: menu });
  } catch (error) {
    dispatch({
      type: "GET_PENGALAMAN_FAILURE",
      payload: error.message,
    });
  }
};

export default GetPengalamanAction;
