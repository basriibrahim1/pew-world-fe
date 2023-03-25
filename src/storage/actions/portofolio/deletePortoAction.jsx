import axios from "axios";

const DeletePortoAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_PORTO_REQUEST" });
    const token = localStorage.getItem("token");
    const result = await axios.delete(`${process.env.REACT_APP_BASE_URL}/porto/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const menu = result.data.data;
    dispatch({
      type: "DELETE_PORTO_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_PORTO_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export default DeletePortoAction;
