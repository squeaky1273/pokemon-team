export const CAPTURE = 'CAPTURE'
export const RELEASE_ALL = 'RELEASE_ALL'
export const REMOVE_FROM_TEAM = 'REMOVE_FROM_TEAM'
export const ADD_ONE = 'ADD_ONE'
export const RELEASE_ONE = 'RELEASE_ONE'

export const captureOne = (id) => {
  return {
    type: CAPTURE,
    payload: { id }
  }
}

export const releaseAll = () => {
    return {
      type: RELEASE_ALL
    }
}

export const removeFromTeam = (id) => {
  return {
      type: REMOVE_FROM_TEAM,
      payload: { id }
  }
}

export const addOne = (id) => {
  return {
    type: ADD_ONE,
    payload: { id }
  }
}

export const releaseOne = (id) => {
  return {
    type: RELEASE_ONE,
    payload: { id }
  }
}
