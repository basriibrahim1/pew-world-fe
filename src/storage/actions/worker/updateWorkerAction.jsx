import axios from "axios";

const UpdateWorkerAction = (id, editForm) => async (dispatch) => {
  try {
    const result = await axios.put(`${process.env.REACT_APP_WORKER_URL}/${id}`, editForm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "UPDATE_WORKER_REQUEST" });
    const menu = result.data;
    console.log(menu);
    dispatch({
      type: "UPDATE_WORKER_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_WORKER_FAILURE",
      payload: error.message,
    });
  }
};

export default UpdateWorkerAction;
