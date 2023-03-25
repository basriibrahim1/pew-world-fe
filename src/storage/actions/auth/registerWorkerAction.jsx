import axios from "axios";

export const RegisterWorkerAction = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_WORKER_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/register-worker`,
      data
    );
    const worker = result.data.data;
    localStorage.setItem("name", worker.name);
    localStorage.setItem("email", worker.email);
    localStorage.setItem("phone", worker.phone);
    localStorage.setItem("password", password.email);
    dispatch({ type: "REGISTER_WORKER_SUCCESS", payload: worker });
    navigate("/add-profile-pekerja");
  } catch (err) {
    dispatch({
      type: "REGISTER_WORKER_FAILED",
      payload: err.response.data.message,
    });
  }
};
