import axios from "axios";

const UpdatePerusahaanAction = (editForm) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_PERUSAHAAN_REQUEST" });
    const token = localStorage.getItem("token");
    const result = await axios.put(`${process.env.REACT_APP_BASE_URL}/employer/update-profile`, editForm, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    const menu = result.data.data;
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
