import { CAPTURE, RELEASE_ALL, REMOVE_FROM_TEAM, ADD_ONE, RELEASE_ONE } from '../actions'

const pokemonTeamReducer = (state = [{ id: 0, count: 3 }], action) => {
  switch(action.type) {
    case CAPTURE:
      // search the array for the id
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].id === action.payload.id) {
          // if id is found
          state[i].count += 1
          // count += 1
          return [...state]
        }
      }
      // else V
      return [...state, { id:action.payload.id, count: 1 }] 
    
    case RELEASE_ALL: 
      return []

    case REMOVE_FROM_TEAM: 
      return state.filter((item, i) => i !== action.payload.id)

    case ADD_ONE:
      return state.map((item, i) => {
        if (action.payload.id === i) {
          item.count += 1
        }
        return item
      })

      case RELEASE_ONE:
        return state.map((item, i) => {
          if (action.payload.id === i) {
            item.count -= 1
          }
          return item
        }).filter(item => item.count > 0)
    
    default: 
      return state
  }
}

export default pokemonTeamReducer