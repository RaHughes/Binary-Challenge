export const spellsReducer = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_SPELLS':
      return action.spells;
     default:
       return state; 
  }
}