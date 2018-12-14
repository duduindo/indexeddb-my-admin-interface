import * as actions from '../actions/actionsType';


export default (state = {}, action) => {
  switch (action.type) {
    case actions.ADD_DATABASE:
      return {
        ...state,
        list: [...state.list, action.payload.name],
      };

    case actions.REMOVE_DATABASE:
      return {
        ...state,
        list: state.list.filter(database => (database !== action.payload.name)),
      };

    case actions.SHOW_DATABASE:
      return {
        ...state,
        selected: action.payload.name,
      };

    default:
      return state;
  }
};
