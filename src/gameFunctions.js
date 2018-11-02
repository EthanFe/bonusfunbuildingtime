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