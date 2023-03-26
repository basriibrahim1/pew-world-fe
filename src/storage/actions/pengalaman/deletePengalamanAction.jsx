import axios from "axios";

const DeletePengalamanAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_PENGALAMAN_REQUEST" });
    const token = localStorage.getItem("token");
    const result = await axios.delete(`${process.env.REACT_APP_BASE_URL}/exp/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const menu = result.data.data;

    dispatch({
      type: "DELETE_PENGALAMAN_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_PENGALAMAN_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export default DeletePengalamanAction;
