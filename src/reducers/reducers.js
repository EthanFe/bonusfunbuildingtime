import {combineReducers} from 'redux'
import {ADD_RESOURCES} from '../actions/resources-actions'

const rootReducer = combineReducers({
  resources: resourcesReducer,
  buildings: buildingsReducer,
  dimensions: dimensionsReducer
})

function resourcesReducer(state = [], { type, payload}) {
  switch (type) {
    case ADD_RESOURCES:
      const newState = [...state]
      newState.find(resource => resource.type === payload.resourceType).amount += payload.amount
      return newState
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