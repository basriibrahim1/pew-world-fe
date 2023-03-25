import axios from "axios";

const UpdatePerusahaanAction = (id, editForm) => async (dispatch) => {
  try {
    const result = await axios.put(`${process.env.REACT_APP_PERUSAHAAN_URL}/${id}`, editForm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "UPDATE_PERUSAHAAN_REQUEST" });
    const menu = result.data;
    console.log(menu);
    dispatch({
      type: "UPDATE_PERUSAHAAN_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_PERUSAHAAN_FAILURE",
      payload: error.message,
    });
  }
};

export default UpdatePerusahaanAction;
