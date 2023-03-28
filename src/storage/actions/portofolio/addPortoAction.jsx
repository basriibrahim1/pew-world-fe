import axios from "axios";

const InsertPortoAction = (postForm) => async (dispatch) => {
  try {
    dispatch({ type: "INSERT_PORTO_REQUEST" });
    const token = localStorage.getItem("token");
    const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/porto`, postForm, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    const menu = result.data;
    dispatch({
      type: "INSERT_PORTO_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "INSERT_PORTO_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export default InsertPortoAction;
