import axios from "axios";

const IdWorkerAction = (id) => async (dispatch) => {
  try {
    const result = await axios.get(`${process.env.REACT_APP_WORKER_URL}/${id}`);
    dispatch({ type: "GET_WORKER_ID_REQUEST" });
    const menu = result.data;
    console.log(menu);
    dispatch({
      type: "GET_WORKER_ID_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "GET_WORKER_ID_FAILURE",
      payload: error.message,
    });
  }
};

export default IdWorkerAction;
