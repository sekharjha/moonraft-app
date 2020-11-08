import phaseReducer from "./reducers/phaseReducer"
import featureReducer from "./reducers/featureReducer"
import projectReducer from "./reducers/projectReducers"
import {combineReducers} from "redux"

const globalReducer = combineReducers({
    phaseReducer,
    featureReducer,
    projectReducer
})
export default globalReducer;