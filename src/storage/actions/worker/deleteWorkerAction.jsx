import axios from "axios";

const DeleteWorkerAction = (id) => async (dispatch) => {
  try {
    const result = await axios.delete(`${process.env.REACT_APP_WORKER_URL}/${id}`, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "DELETE_WORKER_REQUEST" });
    const menu = result.data;
    console.log(menu);
    dispatch({
      type: "DELETE_WORKER_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_WORKER_FAILURE",
      payload: error.message,
    });
  }
};

export default DeleteWorkerAction;
