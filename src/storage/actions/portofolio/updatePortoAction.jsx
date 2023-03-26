import axios from "axios";

const UpdatePortoAction = (id, editForm) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_PORTO_REQUEST" });
    const token = localStorage.getItem("token");
    const result = await axios.put(`${process.env.REACT_APP_BASE_URL}/porto/${id}`, editForm, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    const menu = result.data.data;
    dispatch({ type: "UPDATE_PORTO_SUCCESS", payload: menu });
  } catch (error) {
    dispatch({
      type: "UPDATE_PORTO_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export default UpdatePortoAction;
