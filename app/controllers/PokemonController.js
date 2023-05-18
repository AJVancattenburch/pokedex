import { pokemonService } from "../services/PokemonService.js";
import { AppState } from '../AppState.js';
import { Pop } from '../utils/Pop.js';
import { setHTML } from './../utils/Writer.js';

function _drawPokemon() {
  console.log('pokemon', AppState.pokemon)

  let template = ''

  AppState.pokemon.forEach(p => {
    template += /*html*/`
      <div>
        <p class="fs-4 selectable" role="button" onclick="app.PokemonController.drawActivePokemon('${p.url}')">${p.name}</p>
      </div>`
  })

  setHTML('pokemon', template)
}

function _drawActivePokemon() {
  setHTML('activePokemon', AppState.activePokemon.ActivePokemonCardTemplate)
}
export class PokemonController {
  constructor() {
    this.getPokemonFromApi()
    AppState.on('pokemon', _drawPokemon)
    AppState.on('activePokemon', _drawActivePokemon)
    console.log('poking at the mon')
    this.getPokemonFromApi()

  }

  async getPokemonFromApi() {
    try {
      await pokemonService.getPokemon()
    } catch (error) {
      Pop.error(error)
    }
  }
}