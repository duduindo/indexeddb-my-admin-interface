export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_DATABASE':
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case 'REMOVE_DATABASE':
      return {
        ...state,
        list: state.list.filter(db => {
          const { name, version } = action.payload;
          const hasDatabase = db.name === name && db.version === version;

          return !hasDatabase;
        }),
      };

    case 'SHOW_DATABASE':
      return {
        ...state,
        selected: action.payload,
      };

    default:
      return state;
  }
};
