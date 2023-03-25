import axios from "axios";

const GetWorkerAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_WORKER_REQUEST" });
    const result = await axios.get(`${process.env.REACT_APP_WORKER_URL}`);
    const menu = result.data;
    dispatch({ type: "GET_WORKER_SUCCESS", payload: menu });
  } catch (error) {
    dispatch({
      type: "GET_WORKER_FAILURE",
      payload: error.message,
    });
  }
};

export default GetWorkerAction;
