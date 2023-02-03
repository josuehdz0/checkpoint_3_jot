import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"

function _drawNotes(){
  
  let notes = appState.notes
  let template = ''
  notes.forEach(n => template += n.allNotesTemplate)
  setHTML('notes',template)
  
}
export class NotesController{
  constructor(){
    _drawNotes()
    // appState.on('notes',_drawNotes)
  }

  }

  

