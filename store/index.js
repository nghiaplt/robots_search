import { createStore, combineReducers, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import createSaga from 'redux-saga'
import saga from './saga'
import rootReducer from './reducer'

const sagaMiddleware = createSaga()

const middlewares = applyMiddleware(
  logger,
  sagaMiddleware,
)

const store = createStore(
  rootReducer,
  middlewares,
);

sagaMiddleware.run(saga);

export default store;