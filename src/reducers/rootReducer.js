import { combineReducers } from "redux";
import sidebar from "./sidebar";
import users from "./users";

const appReducer = combineReducers({ sidebar, users });

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
