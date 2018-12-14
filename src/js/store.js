import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers/root';

const initialState = {
  database: {
    list: ['database1', 'database2', 'database3', 'database4'],
    selected: '',
  }
};


const nullMiddleware = () => next => action => {
  console.info('Middleware: ', action);

  next(action ? action : { type: 'UNKNOWN' });
};


const store = createStore(rootReducer, initialState, applyMiddleware(nullMiddleware));
const persistor = persistStore(store);


export { store, persistor };
