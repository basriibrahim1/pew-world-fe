import axios from "axios";

const IdWorkerAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_WORKER_ID_REQUEST" });
    const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/employee/${id}`);
    const menu = result.data.data;
    console.log(menu)
    dispatch({
      type: "GET_WORKER_ID_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "GET_WORKER_ID_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export default IdWorkerAction;
