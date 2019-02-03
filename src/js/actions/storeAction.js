export const setStoresAction = list => ({
  type: 'SET_STORES',
  payload: { list },
});

export const setStoreValuesAction = values => ({
  type: 'SET_STORE_VALUES',
  payload: { values },
});

export const raiseAlarmAction = error => ({
  type: 'SHOW_RAISE_ALARM',
  payload: { error },
});

// --------------------------------------------------
// Fetch
// --------------------------------------------------
export const fetchStoresAction = (name, version) => ({
  type: 'FETCH_INDEXEDDB_EXTENSION',
  payload: {
    command: 'GET_STORE_NAMES_TO_ARRAY',
    onSuccess: setStoresAction,
    onFailure: raiseAlarmAction,
    data: {
      name,
      version,
    },
  },
});

export const fetchStoresValuesAction = (name, version, store) => ({
  type: 'FETCH_INDEXEDDB_EXTENSION',
  payload: {
    command: 'GET_ALL_OBJECT_STORE',
    onSuccess: setStoreValuesAction,
    onFailure: raiseAlarmAction,
    data: {
      name,
      version,
      store,
    },
  },
});
