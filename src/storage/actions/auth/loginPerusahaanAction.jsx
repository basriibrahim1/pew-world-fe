import axios from "axios";

export const loginPerusahaanAction = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_PERUSAHAAN_REQUEST" });
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/login-company`,
      data
    );
    const worker = result.data.data;
    localStorage.setItem("email", worker.email);
    localStorage.setItem("password", worker.name);
    dispatch({ type: "LOGIN_PERUSAHAAN_SUCCESS", payload: worker });
    navigate("/add-profile-perusahaan");
  } catch (err) {
    dispatch({
      type: "LOGIN_PERUSAHAAN_FAILED",
      payload: err.response.data.message,
    });
  }
};
