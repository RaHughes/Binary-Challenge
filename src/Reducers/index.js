import { combineReducers } from 'redux';
import { classesReducer } from './classesReducer';
import { spellsReducer } from './spellsReducer';
import { monstersReducer } from './monstersReducer';
import { saveCharacterReducer } from './saveCharacterReducer';

const rootReducer = combineReducers({
  classes: classesReducer,
  spells: spellsReducer,
  monsters: monstersReducer,
  characters: saveCharacterReducer,
});

export default rootReducer;