import axios from "axios";

const IdPerusahaanAction = (id) => async (dispatch) => {
  try {
    const result = await axios.get(`${process.env.REACT_APP_PERUSAHAAN_URL}/${id}`);
    dispatch({ type: "GET_PERUSAHAAN_ID_REQUEST" });
    const menu = result.data;
    console.log(menu);
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
