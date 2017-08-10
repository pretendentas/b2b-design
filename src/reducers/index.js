import { combineReducers } from 'redux';

import languageFilter from './languageFilter';

const rootReducer = combineReducers({
  languageFilter,
});

export default rootReducer;
