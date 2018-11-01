import {combineReducers} from 'redux'
import {ADD_RESOURCES} from '../actions/resources-actions'

const rootReducer = combineReducers({
  resources: resourcesReducer,
  grid: gridReducer
})

function resourcesReducer(state = {}, { type, payload}) {
  switch (type) {
    case ADD_RESOURCES:
      return {
        ...state, 
        [payload.resourceType]: state[payload.resourceType] + payload.amount
      }
    default:
      return state
  }
}

function gridReducer(state = {}, action) {
  return state
}

export default rootReducer