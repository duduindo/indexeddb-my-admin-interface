import * as actions from './actionsType';

export const addDatabaseAction = name => ({
  type: actions.ADD_DATABASE,
  payload: { name },
});

export const removeDatabaseAction = name => ({
  type: actions.REMOVE_DATABASE,
  payload: { name },
});

export const showDatabaseAction = name => ({
  type: actions.SHOW_DATABASE,
  payload: { name },
});
