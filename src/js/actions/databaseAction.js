import { setItems } from './items';

export const addDatabaseAction = payload => ({
  type: 'ADD_DATABASE',
  payload,
});

export const removeDatabaseAction = payload => ({
  type: 'REMOVE_DATABASE',
  payload,
});

export const showDatabaseAction = payload => ({
  type: 'SHOW_DATABASE',
  payload,
});

export const fetchItemsAction = (item = 1) => ({
  type: 'API',
  payload: {
    url: `http://5826ed963900d612000138bd.mockapi.io/items?item=${item}`,
    onSuccess: setItems,
  }
});
