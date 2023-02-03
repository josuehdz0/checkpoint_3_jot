import { generateId } from "../Utils/generateId.js";



export class Note{
  constructor(data){
    this.id = generateId
    this.name = data.name
    // this.date = data.created
    this.body = data.body || ''
  }

  get allNotesTemplate(){
    return`
    <h3> ${this.name} </h3>
    `
  }

get BigNoteTemplate(){
  return`
  <div class="row">
    <div class="p-4">
      <h1 class="text-center">${this.name} </h1>
      <div class="row justify-content-evenly ">
        <div class="col-4">
          <h6> Created at: sdf</h6>
          <h6> Updated at : sdfa</h6>
          <h6> Words: ?</h6>
        </div>
        <div class="col-7">
          <div class="">
            <textarea class="bodytext"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex pariatur, id porro neque aperiam esse!
            </textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  `
}

}
