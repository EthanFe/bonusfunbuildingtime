import { buildingTypesByName } from "../data";

export const ADD_RESOURCES = 'resources:addResources'
export const SPEND_RESOURCES = 'resources:spendResources'

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

export function spendResources(buildingType) {
  return {
    type: SPEND_RESOURCES,
    payload: {
      costs: buildingTypesByName[buildingType].cost
    }
  }
}