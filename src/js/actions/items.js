export const setItems = payload => ({
  type: 'SET_ITEMS',
  payload: {
    items: payload.items,
  },
});
