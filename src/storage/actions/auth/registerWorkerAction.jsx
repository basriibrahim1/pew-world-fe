import axios from "axios";

export const RegisterWorkerAction = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_WORKER_PENDING" });
    const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register-worker`, data);
    const worker = result.data.data;
    dispatch({ type: "REGISTER_WORKER_SUCCESS", payload: worker });
    navigate("/login-worker");
  } catch (err) {
    dispatch({
      type: "REGISTER_WORKER_FAILED",
      payload: err.response.data.message,
    });
  }
};
