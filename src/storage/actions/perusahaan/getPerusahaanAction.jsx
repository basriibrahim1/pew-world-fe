import axios from "axios";

const GetPerusahaanAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_PERUSAHAAN_REQUEST" });
    const result = await axios.get(`${process.env.REACT_APP_PERUSAHAAN_URL}`);
    const menu = result.data;
    dispatch({ type: "GET_PERUSAHAAN_SUCCESS", payload: menu });
  } catch (error) {
    dispatch({
      type: "GET_PERUSAHAAN_FAILURE",
      payload: error.message,
    });
  }
};

export default GetPerusahaanAction;
