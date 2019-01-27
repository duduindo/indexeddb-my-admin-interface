export default (state = {}, action) => {

  if (action.type === '## SET_DATABASE_TREE')
    console.warn('database: ', state.tree);

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

    case 'SET_DATABASE_TREE':
      return {
        ...state,
        tree: [...state.tree, action.payload.database]
      };

    default:
      return state;
  }
};
