export const SELECT_BUILDING = 'building:selectBuilding'
export const BUILD_BUILDING = 'building:buildBuilding'

export function selectBuilding(buildingType) {
  return {
    type: SELECT_BUILDING,
    payload: {
      buildingType: buildingType
    }
  }
}

export function buildBuilding(buildingType, position) {
  return {
    type: BUILD_BUILDING,
    payload: {
      buildingType: buildingType,
      position: position
    }
  }
}
