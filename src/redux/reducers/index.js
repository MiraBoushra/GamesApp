import { combineReducers } from "redux";

import serviceReducer from "./serviceReducer";

const rootReducer = combineReducers({
  dataForGames: serviceReducer
});

export default rootReducer;
