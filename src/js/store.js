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


const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type !== 'API') {
    return;
  }

  console.warn('API', action.payload);

  const { url, onSuccess } = action.payload;

  fetch(url)
    .then(res => (res.json()))
    .then(data => dispatch(onSuccess(data)));
};


const store = createStore(rootReducer, initialState, applyMiddleware(nullMiddleware, apiMiddleware));
const persistor = persistStore(store);


export { store, persistor };
