import axios from "axios";

export const ResetPasswordAction = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "RESET_PASSWORD_REQUEST" });

    const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/resetPassword`, data)
    const users = result.data.data;
    dispatch({ type: "RESET_PASSWORD_SUCCESS", payload: users });
    navigate("/login");
  } catch (err) {
    dispatch({
      type: "RESET_PASSWORD_FAILED",
      payload: err.response.data.message,
    });
  }
};
