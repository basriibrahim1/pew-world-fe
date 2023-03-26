import axios from "axios";

const IdPengalamanAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_PENGALAMAN_ID_REQUEST" });
    const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/exp/${id}`);
    const menu = result.data.data;
    dispatch({
      type: "GET_PENGALAMAN_ID_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "GET_PENGALAMAN_ID_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export default IdPengalamanAction;
