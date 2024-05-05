import { legacy_createStore as createStore } from 'redux';
import rootReducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

// Creating Redux store with rootReducer and Redux DevTools extension
const store = createStore(
    rootReducer,
    composeWithDevTools()
  );

export default store