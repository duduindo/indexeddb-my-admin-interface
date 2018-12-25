export const addDatabaseAction = (name, version) => ({
  type: 'ADD_DATABASE',
  payload: { name, version },
});

export const removeDatabaseAction = payload => ({
  type: 'REMOVE_DATABASE',
  payload,
});

export const showDatabaseAction = payload => ({
  type: 'SHOW_DATABASE',
  payload,
});
