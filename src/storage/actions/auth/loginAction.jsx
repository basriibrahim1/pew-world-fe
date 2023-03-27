import axios from "axios";

export const loginAction = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_REQUEST" });
    const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`, data);
    const users = result.data.data;
    localStorage.setItem("email", users.email);
    localStorage.setItem("name", users.name);
    localStorage.setItem("nomor", users.phone)
    localStorage.setItem("token", users.accessToken)
    localStorage.setItem("refreshToken", users.refreshToken)
    localStorage.setItem("role", users.role)
    localStorage.setItem("photo", users.photo)
    localStorage.setItem("company_name", users.company_name);
    localStorage.setItem("position", users.position);
    localStorage.setItem("id", users.id);
    localStorage.setItem("accessToken", users.accessToken)
    dispatch({ type: "LOGIN_SUCCESS", payload: users });
    navigate("/add-profile-pekerja");
  } catch (err) {
    dispatch({
      type: "LOGIN_FAILED",
      payload: err.response.data.message,
    });
  }
};
