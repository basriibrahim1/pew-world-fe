import axios from "axios";

export const MailAction = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "SEND_OTP_PENDING" });

    const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/otp`, data)
    const users = result.data.data;
    dispatch({ type: "SEND_OTP_SUCCESS", payload: users });
    navigate("/reset-password/otp");
  } catch (err) {
    dispatch({
      type: "SEND_OTP_FAILED",
      payload: err.response.data.message,
    });
  }
};
