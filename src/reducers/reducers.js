import {combineReducers} from 'redux'
import {ADD_RESOURCES} from '../actions/resources-actions'
import { SELECT_BUILDING } from '../actions/building-actions';
import { MOUSE_OVER_TILE, REMOVE_MOUSEOVER } from '../actions/mouseover-actions';

const rootReducer = combineReducers({
  resources: resourcesReducer,
  buildings: buildingsReducer,
  dimensions: dimensionsReducer,
  selectedBuilding: selectedBuildingReducer,
  mousedOverTile: mousedOverTileReducer
})

function resourcesReducer(state = [], {type, payload}) {
  switch (type) {
    case ADD_RESOURCES:
      const newState = [...state]
      newState.find(resource => resource.type === payload.resourceType).amount += payload.amount
      return newState
    default:
      return state
  }
}

function selectedBuildingReducer(state = null, {type, payload}) {
  switch (type) {
    case SELECT_BUILDING:
      return payload.buildingType
    default:
      return state
  }
}

function mousedOverTileReducer(state = null, {type, payload}) {
  switch (type) {
    case MOUSE_OVER_TILE:
      return payload.tileCoords
    case REMOVE_MOUSEOVER:
      if (state === payload.tileCoords)
        return null
      break
    default:
      return state
  }
}

function buildingsReducer(state = {}, action) {
  return state
}

function dimensionsReducer(state = {}, action) {
  return state
}

export default rootReducer