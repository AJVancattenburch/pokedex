import { pokeApi } from "./AxiosService.js";
import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js"


class PokemonService {

  async setActivePokemon(results) {
    const res = await pokeApi.get('api/v2/pokemon-form/1')
  }

  async getPokemon() {
    const res = await pokeApi.get('api/v2/pokemon')
    AppState.pokemon = res.data.results
  }
}

export const pokemonService = new PokemonService()