import axios from "axios";

const dataWorkerIdAction = (id) => async (dispatch) => {
  try {
    const result = await axios.get(`${process.env.REACT_APP_WORKER_URL}/${id}`)
    dispatch({type : 'DATA_WORKER_ID_REQUEST'})
    const menu = result.data
    console.log(menu)
    dispatch({
      type: 'DATA_WORKER_ID_SUCCESS', payload: menu} )
  } catch (error) {
    dispatch({
      type: 'DATA_WORKER_ID_FAILURE',
      payload: error.message
    })
  }
}


export default dataWorkerIdAction