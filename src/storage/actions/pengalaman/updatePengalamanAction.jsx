import axios from "axios";

const UpdatePengalamanAction = (id, editForm) => async (dispatch) => {
  try {
    const result = await axios.put(`${process.env.REACT_APP_PENGALAMAN_URL}/${id}`, editForm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "UPDATE_PENGALAMAN_REQUEST" });
    const menu = result.data;
    console.log(menu);
    dispatch({
      type: "UPDATE_PENGALAMAN_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_PENGALAMAN_FAILURE",
      payload: error.message,
    });
  }
};

export default UpdatePengalamanAction;
