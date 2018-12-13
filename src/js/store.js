import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const initialState = {
  databases: {
    names: ['database1', 'database2', 'database3', 'database4'],
  }
};


const nullMiddleware = () => next => action => next(action ? action : { type: 'UNKNOWN' });


function configureStore() {
  return createStore(rootReducer, initialState, applyMiddleware(nullMiddleware));
}


export { configureStore };
