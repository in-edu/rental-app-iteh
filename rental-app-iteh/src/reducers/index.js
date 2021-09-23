import { combineReducers } from "redux";
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";
import userReducer from "./userReducer";
import apartmentsReducer from "./apartmentsReducer";

const rootReducer = combineReducers({
    authReducer,
    messageReducer,
    userReducer,
    apartmentsReducer
});

export default rootReducer;