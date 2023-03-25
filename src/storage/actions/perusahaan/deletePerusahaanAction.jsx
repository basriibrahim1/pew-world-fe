import axios from "axios";

const DeletePerusahaanAction = (id) => async (dispatch) => {
  try {
    const result = await axios.delete(`${process.env.REACT_APP_PERUSAHAAN_URL}/${id}`, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "DELETE_PERUSAHAAN_REQUEST" });
    const menu = result.data;
    console.log(menu);
    dispatch({
      type: "DELETE_PERUSAHAAN_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_PERUSAHAAN_FAILURE",
      payload: error.message,
    });
  }
};

export default DeletePerusahaanAction;
