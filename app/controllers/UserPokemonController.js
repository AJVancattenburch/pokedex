import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"
import { Pokemon } from "../models/Pokemon.js"
import { userPokemonService } from "../services/UserPokemonService.js"
import { setHTML } from "../utils/Writer.js";

function _drawUserPokemon() {
  console.log('drawing user pokemon')

  // let template = /*html*/ `
  //   <div>
  //     <div class="d-flex">
  //       <p class="fw-4">
  //         Prepared ${AppState.userPokemon.filter(p => p.prepared).length}/${AppState.userPokemon.length}
  //       </p>
  //     </div>
  //   </div>`

  //   AppState.userPokemon.forEach(s => {
  //     template += s.UserPokemonTemplate
  //   })

  //   setHTML('userPokemon', template)
}
export class UserPokemonController {
  constructor() {
    _drawUserPokemon()
    AppState.on('account', this.getUserPokemon)
    // AppState.on('userPokemon', _drawUserPokemon)
  }

  async getUserPokemon() {
    try {
      await userPokemonService.getUserPokemon()
    } catch (error) {
      Pop.error(error)
    }
  }
}