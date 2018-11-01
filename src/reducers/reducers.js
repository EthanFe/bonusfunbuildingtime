import {combineReducers} from 'redux'
import {ADD_RESOURCES} from '../actions/resources-actions'

const rootReducer = combineReducers({
  resources: resourcesReducer,
  buildings: buildingsReducer,
  dimensions: dimensionsReducer
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

function buildingsReducer(state = [], action) {
  return state
}

function dimensionsReducer(state = {}, action) {
  return state
}

export default rootReducer