const initialState = [{id:1,name:'Web Developer'}]

export default function users(state = initialState, action) {
  switch (action.type) {
    case "CREATE_GROUP": {
      return [...state, action.group];
    }
    case "DELETE_GROUP": {
      const index = state.indexOf(action.group);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    case "EDIT_GROUP": {
      return [
        ...state.slice(0, action.index),
        action.editedGroup,
        ...state.slice(action.index + 1)
      ];
    }
    default:
      return state;
  }
}
