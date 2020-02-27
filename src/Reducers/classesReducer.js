export const classesReducer = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_CLASSES':
      return action.classes;
     default:
       return state; 
  }
}