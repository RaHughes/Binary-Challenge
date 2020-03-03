export const saveCharacterReducer = (state = [], action) => {
  switch(action.type) {
    case 'SAVE_CHARACTER':
      return action.character;
     default:
       return state; 
  }
}