import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { bookReducer } from "./reducer";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  bookReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
