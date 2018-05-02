import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { getItems } from "../localStorage";
import reducer from "../reducers";
import rootSaga from "../sagas";

const initialState = getItems();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(rootSaga);

export default store;