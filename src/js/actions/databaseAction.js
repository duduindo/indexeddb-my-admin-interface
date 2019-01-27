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

export const setDatabaseTreeAction = database => ({
  type: 'SET_DATABASE_TREE',
  payload: { database },
});

export const raiseAlarmAction = error => ({
  type: 'SHOW_RAISE_ALARM',
  payload: { error },
});

// --------------------------------------------------
// Fetch
// --------------------------------------------------
export const fetchDatabaseTreeAction = (name, version, store) => ({
  type: 'FETCH_INDEXEDDB_EXTENSION',
  payload: {
    command: 'GET_DATABASE_TREE',
    onSuccess: setDatabaseTreeAction,
    onFailure: raiseAlarmAction,
    data: {
      name,
      version,
      store,
    },
  },
});
