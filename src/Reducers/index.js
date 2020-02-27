import { combineReducers } from 'redux';
import { classesReducer } from './classesReducer';
import { spellsReducer } from './spellsReducer';
import { monstersReducer } from './monstersReducer';

const rootReducer = combineReducers({
  classes: classesReducer,
  spells: spellsReducer,
  monsters: monstersReducer
});

export default rootReducer;