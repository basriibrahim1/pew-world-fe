import axios from "axios";

const UpdatePengalamanAction = (id, editForm) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_PENGALAMAN_REQUEST" });
    const token = localStorage.getItem("token");
    const result = await axios.put(`${process.env.REACT_APP_BASE_URL}/exp/${id}`, editForm, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const menu = result.data.data;
    dispatch({
      type: "UPDATE_PENGALAMAN_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_PENGALAMAN_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export default UpdatePengalamanAction;
