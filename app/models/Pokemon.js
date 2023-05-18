// import { userPokemonService } from "../services/UserPokemonService.js";
import { AppState } from "../AppState.js";
export class Pokemon {
  constructor(data) {
      this.name = data.name
      this.url = data.url || Number
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

          <p class="fs-2">${this.url}</p>
          <p class="fs-2">${this.PokeButton}</p>

        </div>
      </div>
    `
  }

  get PokeButton() {
    if (!AppState.account) {
      return /*html*/`
        <button class="btn btn-primary" onclick="app.AuthController.login()">Login to Add to Pokedex</button>
      `
    }
    return /*html*/`
      <button class="btn btn-primary" onclick="app.UserPokemonController.addPokemon()">Add to Pokedex</button>
    `
  }
}
