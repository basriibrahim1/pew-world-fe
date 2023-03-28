import axios from "axios";

const UserPengalamanAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "USER_PENGALAMAN_REQUEST" });
   
    const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/exp/user/${id}`);
    const menu = result.data.data;
    console.log(result.data.data)
    dispatch({ type: "USER_PENGALAMAN_SUCCESS", payload: menu });
  } catch (error) {
    dispatch({
      type: "USER_PENGALAMAN_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export default UserPengalamanAction;
