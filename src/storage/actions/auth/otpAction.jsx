import axios from "axios";

export const RegisterPerusahaanAction = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "SEND_OTP_PENDING" });
    const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/verify`, data )
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
