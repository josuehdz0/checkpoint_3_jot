import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";



export class Note{
  constructor(data){
    this.id = generateId()
    this.name = data.name
    this.date = data.date || new Date().toLocaleString('en-US')
    this.body = data.body || ''
    this.color = data.color
    this.updatedDate = data.updatedDate || this.date
  }

  get allNotesTemplate(){
    return`
    <h3 onclick= "app.notesController.setActiveNote('${this.id}')" > <i class="mdi mdi-pencil-circle" style="color: ${this.color}"></i> ${this.name} </h3>
    `
  }

  

  

get BigNoteTemplate(){
  return`
  <div class="row">
    <div class="p-2">
    <div class="d-flex justify-content-between  py-3 px-4">

    <h1 class="text-center">${this.name} <i class="mdi mdi-pencil-circle" style="color: ${this.color}"></i></h1>
    <button class="btn btn-danger" data-bs-dismiss="modal" 
    onclick="app.notesController.deleteNote('${this.id}')">
      <i class="mdi mdi-trash-can"></i>
    </button>

  </div>
      <div class="row justify-content-evenly ">
        <div class="col-4">
          <h6> Created at: ${this.date}</h6>
          <h6> Updated at: ${this.updatedDate} </h6>
          
        </div>
        <div class="col-7">
          <div class="">
            <textarea class="bodytext" name="body" id="📝" onblur="app.notesController.updateNote()"> ${this.body}
            </textarea>
            <h6 class="p-2"> Click anywhere outside the textbox to save your Jot</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  `
}

}
