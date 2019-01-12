import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import databaseReducer from './databaseReducer';
import storeReducer from './storeReducer';

/**
 * Documentation of 'whitelist' and 'blacklist'
 *  - https://www.npmjs.com/package/redux-persist#blacklist--whitelist
 */
const config = {
  key: 'root',
  storage,
  whitelist: [], // ['database']
};

export default persistCombineReducers(config, {
  database: databaseReducer,
  stores: storeReducer,
});
