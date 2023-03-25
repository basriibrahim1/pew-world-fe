import axios from "axios";

export const loginWrokerAction = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "WORKER_LOGIN_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/login-worker`,
      data
    );
    const worker = result.data.data;
    localStorage.setItem("email", worker.email);
    localStorage.setItem("password", worker.name);
    dispatch({ type: "WORKER_LOGIN_SUCCESS", payload: worker });
    navigate("/home");
  } catch (err) {
    dispatch({
      type: "WORKER_LOGIN_FAILED",
      payload: err.response.data.message,
    });
  }
};
