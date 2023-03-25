import axios from "axios";

const IdPerusahaanAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_PERUSAHAAN_ID_REQUEST" });
    const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/employer/${id}`);
    const menu = result.data.data;
    dispatch({
      type: "GET_PERUSAHAAN_ID_SUCCESS",
      payload: menu,
    });
  } catch (error) {
    dispatch({
      type: "GET_PERUSAHAAN_ID_FAILURE",
      payload: error.message,
    });
  }
};

export default IdPerusahaanAction;
