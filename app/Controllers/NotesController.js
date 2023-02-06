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
  _drawCount()
}

function _drawNote() {
  let note = appState.activeNote
  setHTML('bigNote',note.BigNoteTemplate)
}

function _drawCount() {
  document.getElementById("notes-count").innerHTML = `${appState.notes.length}`;
}


export class NotesController{
  constructor(){
    _drawNotes()
    appState.on('notes',_drawNotes)
    appState.on('activeNote', _drawNote)
    // appState.on('notesCount',_drawCount)
    // appState.on('noteCount',)
  }

  createNote(){
    try {
      window.event.preventDefault()
      const form = window.event.target
      const formData = getFormData(form)
      console.log(formData);
      notesService.createNote(formData)
      _drawCount()
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

  updateNote(){
    try {
      let textArea = document.getElementById('📝')
      let updatedBody = textArea.value
      console.log('blurred',updatedBody);
      notesService.updateNote(updatedBody)
      
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }

  async deleteNote(noteId){
    try {
      const yes = await Pop.confirm('Are you sure you want to delete this note?')
      if (!yes) {
        return
      }
      notesService.deleteNote(noteId)
      window.location.reload()
      _drawCount()

    } catch (error) {
      Pop.error(error)
    }
  }

  


  }

  

