import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers/root';

const initialState = {
  database: {
    list: [
      { name: 'database1', version: 2 },
      { name: 'database2', version: 2 },
      { name: 'database3', version: 2 },
      { name: 'database4', version: 2 },
      { name: 'database_teste', version: 2 },
      { name: 'database_teste', version: 2 },
      { name: 'database_teste', version: 3 },
    ],
    selected: {
      name: 'database1',
      version: 2,
    },
  }
};

const nullMiddleware = () => next => action => {
  console.info('Middleware: ', action);

  next(action ? action : { type: 'UNKNOWN' });
};


const store = createStore(rootReducer, initialState, applyMiddleware(nullMiddleware));
const persistor = persistStore(store);


export { store, persistor };
