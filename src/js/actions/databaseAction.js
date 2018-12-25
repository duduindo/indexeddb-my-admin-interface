export const addDatabaseAction = (name, version) => ({
  type: 'ADD_DATABASE',
  payload: { name, version },
});

export const removeDatabaseAction = (name, version) => ({
  type: 'REMOVE_DATABASE',
  payload: { name, version },
});

export const showDatabaseAction = (name, version) => ({
  type: 'SHOW_DATABASE',
  payload: { name, version },
});
