import { combineReducers } from 'redux'
import pokemonTeamReducer from './pokemonTeamReducer'

export default combineReducers({
  pokemonTeam: pokemonTeamReducer
})