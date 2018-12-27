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


const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type !== 'API')
    return;

  const { onSuccess, onFailure } = action.payload;

  // Handle network requests
  window.indexedDBMySQL.getStoreNamesToArray()
    .then(stores => dispatch(onSuccess(stores)))
    .catch(er => dispatch(onFailure(er)));
};


const store = createStore(rootReducer, initialState, applyMiddleware(nullMiddleware, apiMiddleware));
const persistor = persistStore(store);


export { store, persistor };
