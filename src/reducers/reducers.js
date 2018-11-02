import {combineReducers} from 'redux'
import {ADD_RESOURCES, SPEND_RESOURCES} from '../actions/resources-actions'
import { SELECT_BUILDING, BUILD_BUILDING } from '../actions/building-actions';
import { MOUSE_OVER_TILE, REMOVE_MOUSEOVER } from '../actions/mouseover-actions';

const rootReducer = combineReducers({
  resources: resourcesReducer,
  buildings: buildingsReducer,
  dimensions: dimensionsReducer,
  selectedBuilding: selectedBuildingReducer,
  mousedOverTile: mousedOverTileReducer
})

function resourcesReducer(state = [], {type, payload}) {
  const newState = [...state]
  switch (type) {
    case ADD_RESOURCES:
      newState.find(resource => resource.type === payload.resourceType).amount += payload.amount
      return newState
    case SPEND_RESOURCES:
      for (const spentResource in payload.costs) {
        newState.find(resource => resource.type === spentResource).amount -= payload.costs[spentResource]
      }
      return newState
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
      else
        return state
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

function buildingsReducer(state = {}, {type, payload}) {
  switch (type) {
    case BUILD_BUILDING:
    console.log("buildin")
    console.log(payload)
      return [...state, {position: payload.position, type: payload.buildingType}]
    default:
      return state
  }
}

function dimensionsReducer(state = {}, action) {
  return state
}

export default rootReducer