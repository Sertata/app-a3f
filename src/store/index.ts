import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";

import { photosSaga } from "./photos/sagas";
import photos from "./photos/slices";

function* rootSaga() {
  yield fork(photosSaga);
}

const rootReducer = combineReducers({
  photos,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store };
