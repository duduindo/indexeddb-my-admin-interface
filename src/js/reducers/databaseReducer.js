export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_DATABASE':
      return { ...action.payload };

    case 'REMOVE_DATABASE':
      return { ...action.payload };

    default:
      return state;
  }
};
