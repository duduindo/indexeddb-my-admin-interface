export default (state = {name: ''}, action) => {
  switch (action.type) {
    case 'ADD_DATABASE':
      return {
        name: action.name
      };

    default:
      return state;
  }
};
