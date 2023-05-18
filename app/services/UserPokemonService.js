import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { pokeApi } from "../services/AxiosService.js"

class UserPokemonService {
  async getUserPokemon() {
    const res = await pokeApi.get('/api/v2/pokemon')
    AppState.userPokemon = res.data.results.map(p => new Pokemon(p))
  }
}

export const userPokemonService = new UserPokemonService