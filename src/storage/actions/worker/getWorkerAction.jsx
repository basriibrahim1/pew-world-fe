import axios from "axios";

const GetWorkerAction = () => async (dispatch) => {
  try {
    const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/employee/all`);
    dispatch({ type: "GET_WORKER_REQUEST" });
    const menu = result.data.data;
    dispatch({ type: "GET_WORKER_SUCCESS", payload: menu });
  } catch (error) {
    dispatch({
      type: "GET_WORKER_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export default GetWorkerAction;
