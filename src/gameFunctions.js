import {buildingTypesByName} from './data'
import {index} from './funtimes'

export const isBuildable = (buildingType, resources) => {
  const costs = buildingTypesByName[buildingType].cost
    for (const resource in costs) {
      const currentResourceAmount = index(resources, "type")[resource].amount
      if (currentResourceAmount < costs[resource])
        return false
    }
    return true
}

export const buildingsAreIdentical = (building1, building2) => {
  return building1 !== undefined && building2 !== undefined &&
          building1.position.x === building2.position.x &&
          building1.position.y === building2.position.y &&
          building1.type === building2.type
}