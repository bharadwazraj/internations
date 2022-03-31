const initialState = [{
  name: 'Adrian Beria',
  groups: [{id:1}]
}];
export default function users(state = initialState, action) {
  switch (action.type) {
    case "CREATE_USER": {
      return [...state, action.user];
    }
    case "DELETE_USER": {
      const index = state.indexOf(action.user);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    case "EDIT_USER": {
      return [
        ...state.slice(0, action.index),
        action.editedUser,
        ...state.slice(action.index + 1)
      ];
    }
    default:
      return state;
  }
}
