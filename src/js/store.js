import { createStore } from 'redux';
import reducers from './reducers';

function configureStore(state) {
  return createStore(reducers);
}


export default configureStore;
