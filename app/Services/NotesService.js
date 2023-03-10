import { appState } from "../AppState.js";
import { Note } from "../Models/Note.js"
import { saveState } from "../Utils/Store.js";

class NotesService{
  updateNote(updatedBody) {
    let activeNote = appState.activeNote
    activeNote.body = updatedBody
    activeNote.updatedDate = new Date().toLocaleString('en-US')
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

  deleteNote(noteId){
    let noteIndex = appState.notes.findIndex(n=>n.id==noteId)

    if (noteIndex == -1) {
      throw new Error('That is a bad note id')
    }

    appState.notes.splice(noteIndex,1)
    saveState('notes',appState.notes)
    appState.emit('notes')// this reminds the emitter to look at this change
  }

 
}

export const notesService = new NotesService()