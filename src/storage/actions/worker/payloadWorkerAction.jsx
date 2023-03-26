import axios from "axios";

const PayloadWorkerAction = () => async (dispatch) => {
  try {
    dispatch({ type: "PAYLOAD_WORKER_REQUEST" });
    const token = localStorage.getItem('token')
    const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/employee/my-profile`, {
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    });
    const menu = result.data.data;
    dispatch({ type: "PAYLOAD_WORKER_SUCCESS", payload: menu });
  } catch (error) {
    dispatch({
      type: "PAYLOAD_WORKER_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export default PayloadWorkerAction;
