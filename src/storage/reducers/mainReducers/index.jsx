import { combineReducers } from "redux";
import { DataWorkerIdReducers } from "../worker/dataWorkerIdReducer";
import { DataWorkerReducers } from "../worker/dataWorkerReducer";

const rootReducers = combineReducers({
   worker: DataWorkerReducers,
   workerId: DataWorkerIdReducers
})

export default rootReducers