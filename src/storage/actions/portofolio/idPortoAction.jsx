import axios from "axios";

const IdPortoAction = (id) => async (dispatch) => {
  try {
    const result = await axios.get(`${process.env.REACT_APP_PORTO_URL}/${id}`);
    dispatch({ type: "GET_PORTO_ID_REQUEST" });
    const menu = result.data;
    console.log(menu);
    dispatch({
      type: "GET_PORTO_ID_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "GET_PORTO_ID_FAILURE",
      payload: error.message,
    });
  }
};

export default IdPortoAction;
