import { combineReducers } from "redux"
import contactReducer from "./contactList"

// Combining multiple reducers into a single rootReducer using combineReducers
const rootReducer = combineReducers({contactReducer,})

export default rootReducer