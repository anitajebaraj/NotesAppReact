import { createStore } from 'redux';
import reducers from './reducers';

export function initStore() {
  const initialState = {
    notes: [],
    search: ""
  };
  return createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
