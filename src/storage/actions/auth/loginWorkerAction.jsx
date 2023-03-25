import axios from "axios";

export const loginWorkerAction = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_WORKER_REQUEST" });
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/login-worker`,
      data
    );
    const worker = result.data.data;
    localStorage.setItem("email", worker.email);
    localStorage.setItem("password", worker.name);
    dispatch({ type: "LOGIN_WORKER_SUCCESS", payload: worker });
    navigate("/add-profile-pekerja");
  } catch (err) {
    dispatch({
      type: "LOGIN_WORKER_FAILED",
      payload: err.response.data.message,
    });
  }
};
