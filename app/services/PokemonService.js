import { pokeApi } from "./AxiosService.js";
import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js"


class PokemonService {

  async setActivePokemon() {
    const res = await pokeApi.get('api/v2/pokemon' + '/1')

    console.log('what are the RESULTS...of that data', res.data)

    AppState.activePokemon = new Pokemon(res.data)

  }

  async getPokemon() {
    const res = await pokeApi.get('api/v2/pokemon')
    AppState.pokemon = res.data.results
  }
}

export const pokemonService = new PokemonService()