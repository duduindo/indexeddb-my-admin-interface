
const initial = {
  name: '',
  number: 0,
};

export default (state = initial, action) => {
  switch (action.type) {
    case 'ADD_DATABASE':
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
