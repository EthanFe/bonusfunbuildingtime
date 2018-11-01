import React, { Component } from 'react';
import {buildingTypes} from '../data'
import Building from "./Building"

export default class BuildingList extends Component {
  render() {
    return (
      <div className="building-list">
        {buildingTypes.map(buildingType => <Building type={buildingType.name}></Building>)}
      </div>
    )
  }
}