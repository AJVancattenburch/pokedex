import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { api } from "../services/AxiosService.js"

class UserPokemonService {

  async setActivePokemon() {
    const res = await api.get('/pokeApi/v2/pokemon/' + '/1')
    console.log('results', res.data.results)
    AppState.userPokemon = res.data.map(s => new Pokemon(p))
  }

  async getUserPokemon() {
    const res = await api.get('/pokeApi/v2/pokemon')
    AppState.userPokemon = res.data.results
  }
}

export const userPokemonService = new UserPokemonService