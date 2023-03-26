import axios from "axios";

const GetPortoAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_PORTO_REQUEST" });
    const token = localStorage.getItem("token");
    const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/porto/myporto`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const menu = result.data.data;
    dispatch({ type: "GET_PORTO_SUCCESS", payload: menu });
  } catch (error) {
    dispatch({
      type: "GET_PORTO_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export default GetPortoAction;
