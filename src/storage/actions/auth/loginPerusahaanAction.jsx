// import axios from "axios";

// export const loginPerusahaanAction = (verification, navigate) => async (dispatch) => {
//   try {
//     dispatch({ type: "LOGIN_PERUSAHAAN_REQUEST" });
//     const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`, verification);
//     const data = result.data.data;
//     localStorage.setItem("name", data.name);
//     localStorage.setItem("email", data.email);
//     localStorage.setItem("token", data.token);
//     localStorage.setItem("company_name", data.company_name);
//     dispatch({ type: "LOGIN_PERUSAHAAN_SUCCESS", payload: data });
//     navigate("/add-profile-perusahaan");
//   } catch (err) {
//     dispatch({
//       type: "LOGIN_PERUSAHAAN_FAILED",
//       payload: err.response.data.message,
//     });
//   }
// };
