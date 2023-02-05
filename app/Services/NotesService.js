import { appState } from "../AppState.js";
import { Note } from "../Models/Note.js"
import { saveState } from "../Utils/Store.js";

class NotesService{
  updatedNote(updatedBody) {
    let activeNote = appState.activeNote
    activeNote.body = updatedBody
    saveState('notes',appState.notes)
    console.log(appState.notes);
    appState.emit('activeNote')
  }



  createNote(formData){
    let newNote = new Note(formData)
    console.log(newNote);
    appState.notes.push(newNote)
    saveState('notes',appState.notes)
    appState.emit('notes')
  }

  setActiveNote(noteId){
    let foundNote = appState.notes.find(n => n.id == noteId)
    console.log(foundNote);
    appState.activeNote = foundNote
  }

// when I update the note, the body will change, and so will updated timestamp
// note.updated = date.now (get the curent timestamp; refer to MDN docs) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

}

export const notesService = new NotesService()