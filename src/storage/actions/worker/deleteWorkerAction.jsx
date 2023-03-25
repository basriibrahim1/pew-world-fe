import axios from "axios";

const DeleteWorkerAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_WORKER_REQUEST" });
    const token = localStorage.getItem("token");
    const result = await axios.delete(`${process.env.REACT_APP_BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const menu = result.data;
    console.log(menu);
    dispatch({
      type: "DELETE_WORKER_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_WORKER_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export default DeleteWorkerAction;
