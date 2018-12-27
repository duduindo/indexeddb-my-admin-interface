export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_STORES':
      return {
        ...state,
        list: action.payload.list.map(name => ({ name })),
      };

    default:
      return state;
  }
};
