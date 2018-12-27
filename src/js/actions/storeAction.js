export const setStoresAction = list => ({
  type: 'SET_STORES',
  payload: { list },
});

export const raiseAlarmAction = error => ({
  type: 'SHOW_RAISE_ALARM',
  payload: { error },
});

export const fetchStoresAction = (name, version) => ({
  type: 'API_EXTENSION',
  payload: {
    command: 'GET_STORES',
    name,
    version,
    onSuccess: setStoresAction,
    onFailure: raiseAlarmAction,
  },
});
