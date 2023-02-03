import { appState } from "../AppState.js"
import { notesService } from "../Services/NotesService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawNotes(){
  let notes = appState.notes
  let template = ''
  notes.forEach(n => template += n.allNotesTemplate)
  setHTML('allNotes',template)
}

function _drawNote() {
  let note = appState.activeNote
  setHTML('bigNote',note.BigNoteTemplate)

  
}


export class NotesController{
  constructor(){
    _drawNotes()
    appState.on('notes',_drawNotes)
    appState.on('activeNote', _drawNote)
  }

  createNote(){
    try {
      window.event.preventDefault()
      const form = window.event.target
      const formData = getFormData(form)
      console.log(formData);
      notesService.createNote(formData)
      form.reset()
    } catch (error) {
      Pop.error(error.message)
      console.error(error);
    }
  }

  setActiveNote(noteId){
    try {
      notesService.setActiveNote(noteId)
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }

  }


  }

  

