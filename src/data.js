import {index} from "./funtimes"

export const buildingTypes = [ 
  { name: "lumber mill", image: "mill", cost: {stone: 40, wood: 10}, production: [{resource: "wood", time: 4, amount: 2}]},
  { name: "mine", image: "mine", cost: {stone: 15, wood: 35}, production: [{resource: "stone", time: 3, amount: 1}]},
  { name: "farm", image: "farm", cost: {stone: 15, wood: 35}, production: [{resource: "cow", time: 6, amount: 1}]},
  { name: "garden", image: "christmas_tree", cost: {stone: 15, wood: 35}, production: [{resource: "christmas tree", time: 5, amount: 1}]},
  { name: "pool", image: "pond", cost: {stone: 15, wood: 35}, production: [{resource: "fish", rate: 1, amount: 1}]},
  // { name: "burjkhalifa", image: "burjkhalifa", cost: {stone: 1000000, wood: 1000000}}
]

export const buildingTypesByName = index(buildingTypes, 'name')