import thunkMiddleware from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import * as Api from './utils/api';

import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware.withExtraArgument({ Api })),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;