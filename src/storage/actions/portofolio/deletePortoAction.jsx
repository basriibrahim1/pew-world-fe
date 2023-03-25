import axios from "axios";

const DeletePortoAction = (id) => async (dispatch) => {
  try {
    const result = await axios.delete(`${process.env.REACT_APP_PORTO_URL}/${id}`, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "DELETE_PORTO_REQUEST" });
    const menu = result.data;
    console.log(menu);
    dispatch({
      type: "DELETE_PORTO_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_PORTO_FAILURE",
      payload: error.message,
    });
  }
};

export default DeletePortoAction;
