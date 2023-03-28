import axios from "axios";

const UserPortoAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "USER_PORTO_REQUEST" });
    const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/porto/user/${id}`)
    const menu = result.data.data;
    dispatch({ type: "USER_PORTO_SUCCESS", payload: menu });
  } catch (error) {
    dispatch({
      type: "USER_PORTO_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export default UserPortoAction;
