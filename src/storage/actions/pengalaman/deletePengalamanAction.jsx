import axios from "axios";

const DeletePengalamanAction = (id) => async (dispatch) => {
  try {
    const result = await axios.delete(`${process.env.REACT_APP_PENGALAMAN_URL}/${id}`, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "DELETE_PENGALAMAN_REQUEST" });
    const menu = result.data;
    console.log(menu);
    dispatch({
      type: "DELETE_PENGALAMAN_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_PENGALAMAN_FAILURE",
      payload: error.message,
    });
  }
};

export default DeletePengalamanAction;
