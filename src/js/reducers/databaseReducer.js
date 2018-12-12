
const initial = {
  names: ['database1'],
};

export default (state = initial, action) => {
  switch (action.type) {
    case 'ADD_DATABASE':
      return { ...action.payload };

    case 'DELETE_DATABASE':
      return { ...action.payload };

    default:
      return state;
  }
};
