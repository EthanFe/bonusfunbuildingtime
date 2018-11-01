import React, { Component } from 'react';
import {connect} from 'react-redux'
import {buildingTypesByName} from '../data'
import {index} from '../funtimes'

class Building extends Component {
  render() {
    let image = buildingTypesByName[this.props.type].image
    let className = "building-icon"
    if (this.isBuildable(this.props.type))
      className += " buildable"
    return <img className={className} src={require(`../images/${image}.png`)} alt=""/>
  }

  isBuildable = (buildingType) => {
    const costs = buildingTypesByName[buildingType].cost
    for (const resource in costs) {
      const currentResourceAmount = index(this.props.resources, "type")[resource].amount
      if (currentResourceAmount < costs[resource])
        return false
    }
    return true
  }
}

const mapStateToProps = state => ({
  resources: state.resources
})

export default connect(mapStateToProps)(Building);