export const ADD_RESOURCES = 'resources:addResources'

export function addResources(resourceType, amount) {
  return {
    type: ADD_RESOURCES,
    payload: {
      resourceType: resourceType,
      amount: amount
    }
  }
}