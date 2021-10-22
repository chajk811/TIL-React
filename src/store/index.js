import { createStore, combineReducers } from 'redux';
// import global from './global';
import counterReducer from './counter/reducer';

const rootReducer = combineReducers({
  // global,
  counter: counterReducer,
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

export default store;
