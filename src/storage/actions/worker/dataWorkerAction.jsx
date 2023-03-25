import axios from "axios";

const DataWorkerAction = () => async (dispatch) => {
  try {
    dispatch({type : 'DATA_WORKER_REQUEST'})
    const result = await axios.get(`${process.env.REACT_APP_WORKER_URL}`)
    const menu = result.data
    dispatch({type: 'DATA_WORKER_SUCCESS', payload: menu})
  } catch (error) {
    dispatch({
      type: 'DATA_WORKER_FAILURE',
      payload: error.message
    })
  }
}


export default DataWorkerAction