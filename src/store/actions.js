

export const ADD_NOTES = 'ADD_NOTES';
export const UPDATE_NOTES = 'UPDATE_NOTES';

export function addNotes(notesId, content) {
  return {
    type: ADD_NOTES,
    carId: notesId,
    rating: content,
  }
}

export function updateNotes(notes) {
  return {
    type: UPDATE_NOTES,
    notes: notes,
  }
}


export function createNewNote() {
  return {
    type: "CREATE_NOTE"
  }
}

export function deleteNote(id) {
  return {
    type: "DELETE_NOTE",
    id: id
  }
}


export function searchText(value) {
  return {
    type: "SEARCH_TEXT",
    value: value
  }
}