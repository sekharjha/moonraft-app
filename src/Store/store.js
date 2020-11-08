import {createStore} from "redux"
import globalReducer from "./globalreducers"

const store  = createStore(globalReducer);

export default store;
