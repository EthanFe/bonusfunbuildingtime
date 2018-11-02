export const SELECT_BUILDING = 'building:selectBuilding'

export function selectBuilding(buildingType) {
  return {
    type: SELECT_BUILDING,
    payload: {
      buildingType: buildingType
    }
  }
}