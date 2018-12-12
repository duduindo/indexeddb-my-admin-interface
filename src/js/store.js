import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const customMiddleware = store => next => action => {
  next(action);
};


function configureStore() {
  return createStore(reducers, applyMiddleware(customMiddleware));
}


export default configureStore;
