import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from './counter';
import todoReducer from './todo/slide';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: true }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
  middleware: middleware,
});

sagaMiddleware.run(rootSaga);

