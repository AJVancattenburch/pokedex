// import { userPokemonService } from "../services/UserPokemonService.js";
import { AppState } from "../AppState.js";
export class Pokemon {
  constructor(data) {
      this.name = data.name
      this.nickName = data.nickName
      this.img = data.img
      this.weight = data.weight
      this.types = data.types || ''
      this.creatorId = data.creatorId || ''
      this.creator = data.creator
      this.prepared = data.prepared || false
  }
  get ActivePokemonCardTemplate() {
    return /*html*/`
      <div class="card sticky-top my-4">
        <div class="card-header fs-3">
          ${this.name}
        </div>
        <div class="card-body">

          <p class="fs-2">${this.description}</p>
          <p class="fs-2">${this.SpellbookButton}</p>

        </div>
      </div>
    `
  }
}
