import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";

// This is the reducer that will be passed into Redux store
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer
});

export default rootReducer;
