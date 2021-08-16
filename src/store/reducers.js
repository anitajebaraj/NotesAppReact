import { combineReducers } from 'redux';

// this is a no-op reducer
export function notes(state = [], action) {
  if (action.type==="ADD_NOTES") {
    let newCars = [ ...state ];
    if (action.notesId) {
      const carToUpdate = newCars.find((obj) => obj.id === action.carId);
      carToUpdate.rating = action.rating;
    }
    
    return newCars;
  } 
  if (action.type==="UPDATE_NOTES") {
    return action.notes;
  } 
  if (action.type === "CREATE_NOTE") {
    let newNotes = [ ...state, {id: Math.random(), content: ""} ];
    return newNotes;
  }
  if (action.type === "DELETE_NOTE") {
    let newNotes = [ ...state ];
    newNotes = newNotes.filter((obj) => obj.id !== action.id);
    return newNotes;
  }
  return state;
}

export function search(state = [], action) {
  if (action.type === "SEARCH_TEXT") {
    return action.value;
  }
  return state;
}


export default combineReducers({ notes, search });
