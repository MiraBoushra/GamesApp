import { applyMiddleware, compose, createStore } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

function store() {
  if (process.env.NODE_ENV === "production") {
    return createStore(rootReducer, applyMiddleware(thunk));
  }
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}

export default store();
