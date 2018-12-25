export default (state = {}, action) => {

  if (action.type === 'ADD_DATABASE')
    console.warn('reducer: ', action);

  switch (action.type) {
    case 'ADD_DATABASE':
      return { ...state, ...action.payload };

    case 'REMOVE_DATABASE':
      return { ...state, ...action.payload };

    case 'SHOW_DATABASE':
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
