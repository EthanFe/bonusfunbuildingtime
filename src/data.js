import {index} from "./funtimes"

export const buildingTypes = [ 
  { name: "lumber mill", image: "mill", cost: {stone: 40, wood: 10}},
  { name: "mine", image: "mine", cost: {stone: 15, wood: 35}}
]

export const buildingTypesByName = index(buildingTypes, 'name')