import axios from "axios";

const DeletePerusahaanAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_PERUSAHAAN_REQUEST" });
    const token = localStorage.getItem("token");
    const result = await axios.delete(`${process.env.REACT_APP_BASE_URL}/employer/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const menu = result.data;
    dispatch({
      type: "DELETE_PERUSAHAAN_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_PERUSAHAAN_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export default DeletePerusahaanAction;
