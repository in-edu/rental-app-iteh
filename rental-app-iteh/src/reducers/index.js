import { combineReducers } from "redux";
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";
import userReducer from "./userReducer";
import apartmentsReducer from "./apartmentsReducer";
import weatherReducer from "./weatherReducer"
import currencyReducer from "./currencyReducer"

const rootReducer = combineReducers({
    authReducer,
    messageReducer,
    userReducer,
    apartmentsReducer,
    weatherReducer,
    currencyReducer
});

export default rootReducer;