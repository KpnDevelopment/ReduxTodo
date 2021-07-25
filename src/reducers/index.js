import { TodoReducer } from "./TodoReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  todo: TodoReducer,
});
export default allReducers;
