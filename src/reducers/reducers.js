import {ADD_RESOURCES} from '../actions/resources-actions'
import { SELECT_BUILDING, BUILD_BUILDING } from '../actions/building-actions';
import { MOUSE_OVER_TILE, REMOVE_MOUSEOVER } from '../actions/mouseover-actions';
import { isBuildable } from '../gameFunctions';
import { buildingTypesByName } from '../data';

const rootReducer = (state = {}, {type, payload}) => {
  const newState = {}
  // some janky-ass one level deep copy stuff because otherwise i'm accidentally mutating original substates. fak.
  for (const stateSlice in state) {
    if (state[stateSlice] !== null && typeof state[stateSlice] === "object") {
      if (state[stateSlice].length !== undefined) {
        newState[stateSlice] = [...state[stateSlice]]
      } else {
        newState[stateSlice] = {...state[stateSlice]}
      }
    } else {
      newState[stateSlice] = state[stateSlice]
    }
  }

  switch (type) {
    case ADD_RESOURCES:
      newState.resources.find(resource => resource.type === payload.resourceType).amount += payload.amount
      return newState
    case MOUSE_OVER_TILE:
      newState.mousedOverTile = payload.tileCoords
      return newState
    case REMOVE_MOUSEOVER:
      if (state.mousedOverTile === payload.tileCoords) {
        newState.mousedOverTile = null
        return newState
      } else {
        return state
      }
    case SELECT_BUILDING:
      newState.selectedBuilding = payload.buildingType
      return newState
    case BUILD_BUILDING:
      if (isBuildable(state.selectedBuilding, state.resources)) {
        // build da building
        newState.buildings.push({position: state.mousedOverTile, type: state.selectedBuilding})
        
        // spend da resources
        const costs = buildingTypesByName[state.selectedBuilding].cost
        for (const spentResource in costs) {
          newState.resources.find(resource => resource.type === spentResource).amount -= costs[spentResource]
        }

        // deselect da building
        newState.selectedBuilding = null
      }
      return newState
    default:
      return state
  }
}

export default rootReducer