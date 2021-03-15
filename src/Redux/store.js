import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from "redux-persist"
import thunk from 'redux-thunk';
// import logger from 'redux-logger'

import rootReducer from './root-reducer';


const initialState = {}
// const middleware = [thunk, logger];
const middleware = [thunk];
export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export const persistor = persistStore(store)
