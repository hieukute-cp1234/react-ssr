import { combineReducers } from "redux";
import detailReducer from "./detail";

const rootReducer = combineReducers({
  detail: detailReducer,
});

export default rootReducer;
