export const showStoresAction = stores => ({
  type: 'GET_STORES',
  payload: { stores },
});


export const fetchStoresAction = (name, version) => ({
  type: 'API',
  payload: {
    name,
    version,
    onSuccess: showStoresAction,
  },
});
