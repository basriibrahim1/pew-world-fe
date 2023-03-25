import axios from "axios";

const InsertPengalamanAction = (postForm) => async (dispatch) => {
  try {
    dispatch({ type: "INSERT_PENGALAMAN_REQUEST" });
    const token = localStorage.getItem("token");
    const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/exp`, postForm, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    const menu = result.data;
    dispatch({
      type: "INSERT_PENGALAMAN_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "INSERT_PENGALAMAN_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export default InsertPengalamanAction;
