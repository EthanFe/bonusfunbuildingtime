export const ADD_RESOURCES = 'resources:addResources'
export const REMOVE_RESOURCE_FLOATY = 'resources:removeResourceFloaty'

export function addResources(resourceType, amount, productionSource, productionTime, totalResources) {
  return {
    type: ADD_RESOURCES,
    payload: {
      resourceType: resourceType,
      amount: amount,
      productionSource: productionSource,
      productionTime: productionTime,
      totalResources: totalResources
    }
  }
}

export function removeResourceFloaty(floaty) {
  return {
    type: REMOVE_RESOURCE_FLOATY,
    payload: {
      floaty: floaty
    }
  }
}