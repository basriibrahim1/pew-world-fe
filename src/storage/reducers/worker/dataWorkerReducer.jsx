const initialState = {
    data: [],
    isError: null,
    isLoading: false,
}


export const DataWorkerReducers = (state = initialState, action) => {
    switch(action.type){
        case 'DATA_WORKER_REQUEST':
          return {
            ...state,
            isLoading: true,
          }
        case 'DATA_WORKER_SUCCESS':
          return {
            ...state,
            isLoading: false,
            data: action.payload
          }
        case 'DATA_WORKER_FAILURE':
          return {
            ...state,
            isLoading: false,
            isError: action.payload
          }
        default:
         return state
      }
}