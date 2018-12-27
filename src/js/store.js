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
  },
  stores: {
    list: [
      { name: 'reservations-test', owner: { name: 'database1', version: 2 }}
    ]
  }
};


/**
 * Middleware detected errors
 */
const nullMiddleware = () => next => action => {
  console.info('Middleware: ', action);

  next(action ? action : { type: 'UNKNOWN' });
};


/**
 * Middleware sent command to Chrome's extension
 */
const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type !== 'FETCH_INDEXEDDB_EXTENSION')
    return;

  const { command, onSuccess, onFailure } = action.payload;

  window.indexedDBMySQL.getStoreNamesToArray()
    .then(stores => dispatch(onSuccess(stores)))
    .catch(er => dispatch(onFailure(er)));
};


const store = createStore(rootReducer, initialState, applyMiddleware(nullMiddleware, apiMiddleware));
const persistor = persistStore(store);


export { store, persistor };
