import { combineReducers } from "redux";
import dataReducer from "./data";
import stateReducer from "./state";

export default combineReducers({
  data: dataReducer,
  uiState: stateReducer
});
