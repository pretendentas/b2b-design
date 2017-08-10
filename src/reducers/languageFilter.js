import { ADD_TODO } from '../actions/index';


function languageFilter(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    default:
      return state;
  }
}

// const todoApp = combineReducers({
//   visibilityFilter,
//   todos
// });

export default languageFilter;
