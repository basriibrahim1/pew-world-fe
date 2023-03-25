import axios from "axios";

const GetPengalamanAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_PENGALAMAN_REQUEST" });
    const token = localStorage.getItem("token");
    const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/exp/myexp`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const menu = result.data.data;
    dispatch({ type: "GET_PENGALAMAN_SUCCESS", payload: menu });
  } catch (error) {
    dispatch({
      type: "GET_PENGALAMAN_FAILURE",
      payload: error.message,
    });
  }
};

export default GetPengalamanAction;
