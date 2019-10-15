import { combineReducers } from "redux";
import counter from "./counter";
import sider from "./sider";

const reducers = combineReducers({
  counter,
  sider
});

export default reducers;
