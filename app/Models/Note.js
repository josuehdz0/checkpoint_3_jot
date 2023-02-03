import { generateId } from "../Utils/generateId.js";



export class Note{
  constructor(data){
    this.id = generateId
    this.name = data.name
    this.date = data.created
    this.body = data.body || ''
  }

  get allNotesTemplate(){
    return`
    <h3> Test Note </h3>
    `
  }
}
