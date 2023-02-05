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
    <h3 onclick= "app.notesController.setActiveNote('${this.id}')"> ${this.name} </h3>
    `
  }

get BigNoteTemplate(){
  return`
  <div class="row">
    <div class="p-4">
      <h1 class="text-center">${this.name} </h1>
      <div class="row justify-content-evenly ">
        <div class="col-4">
          <h6> Created at: ${this.date}</h6>
          <h6> Updated at: ${this.updatedDate} </h6>
          <h6> Words: ?</h6>
        </div>
        <div class="col-7">
          <div class="">
            <textarea class="bodytext" name="body" id="📝" onblur="app.notesController.updateNote()"> ${this.body}
            </textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  `
}

}
