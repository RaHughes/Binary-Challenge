export const monstersReducer = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_MONSTERS':
      return action.monsters;
     default:
       return state; 
  }
}