import axios from "axios";

export const OtpAction = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "CHECK_OTP_REQUEST" });
    const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/otp/confirm`, data)
    const users = result.data.data[0];
    localStorage.setItem("email", users.email);
    dispatch({ type: "CHECK_OTP_SUCCESS", payload: users });
    navigate("/reset-password/otp/new-password");
  } catch (err) {
    dispatch({
      type: "CHECK_OTP_FAILED",
      payload: err.response.data.message,
    });
  }
};