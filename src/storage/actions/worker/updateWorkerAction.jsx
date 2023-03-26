import axios from "axios";

const UpdateWorkerAction = (editForm) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_WORKER_REQUEST" });
    const token = localStorage.getItem("token");
    const result = await axios.put(`${process.env.REACT_APP_BASE_URL}/employee/update-profile`, editForm, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`,
      },
    });
    const menu = result.data;
    dispatch({
      type: "UPDATE_WORKER_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_WORKER_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export default UpdateWorkerAction;
