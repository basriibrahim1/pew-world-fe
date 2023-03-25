import axios from "axios";

const UpdatePortoAction = (id, editForm) => async (dispatch) => {
  try {
    const result = await axios.put(`${process.env.REACT_APP_PORTO_URL}/${id}`, editForm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "UPDATE_PORTO_REQUEST" });
    const menu = result.data;
    console.log(menu);
    dispatch({
      type: "UPDATE_PORTO_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_PORTO_FAILURE",
      payload: error.message,
    });
  }
};

export default UpdatePortoAction;
