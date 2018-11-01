export const ADD_RESOURCES = 'resources:addResources'

export function addResources(buildingType, amount) {
  const buildingResources = {
    "lumber mill": "wood",
    "mine": "stone"
  }
  return {
    
    type: ADD_RESOURCES,
    payload: {
      resourceType: buildingResources[buildingType],
      amount: amount
    }
  }
}