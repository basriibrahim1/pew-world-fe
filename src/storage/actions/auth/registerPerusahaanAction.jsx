import axios from "axios";

export const RegisterPerusahaanAction = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_PERUSAHAAN_PENDING" });
    const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register-company`, data);
    const company = result.data.data;
    dispatch({ type: "REGISTER_PERUSAHAAN_SUCCESS", payload: company });
    navigate("/login-company");
  } catch (err) {
    dispatch({
      type: "REGISTER_PERUSAHAAN_FAILED",
      payload: err.response.data.message,
    });
  }
};
