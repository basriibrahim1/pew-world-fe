const initialState = {
    data: [],
    isError: null,
    isLoading: false
}


export const DataWorkerIdReducers = (state = initialState, action) => {
    switch(action.type){
        case 'DATA_WORKER_ID_REQUEST':
          return {
            ...state,
            isLoading: true,
          }
        case 'DATA_WORKER_ID_SUCCESS':
          return {
            ...state,
            data: action.payload,
            isLoading: false,
          }
        case 'DATA_WORKER_ID_FAILURE':
          return {
            ...state,
            isLoading: false,
            isError: action.payload
          }
        default:
         return state
      }
}