import React, { Component } from 'react';
import {connect} from 'react-redux'
import {buildingTypesByName} from '../data'
import {index} from '../funtimes'
import {selectBuilding} from '../actions/building-actions'

class Building extends Component {
  render() {
    let image = buildingTypesByName[this.props.type].image
    let className = "building-icon"
    if (this.isBuildable(this.props.type))
      className += " buildable"
    if (this.props.selected)
      className += " selected"
    return <img onClick={this.selectBuilding} className={className} src={require(`../images/${image}.png`)} alt=""/>
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

  selectBuilding = () => {
    if (this.isBuildable(this.props.type))
      this.props.selectBuilding(this.props.type)
  }
}

const mapStateToProps = (state, props) => ({
  resources: state.resources,
  selected: state.selectedBuilding === props.type
})

const mapActionsToProps = {
  selectBuilding: selectBuilding
}

export default connect(mapStateToProps, mapActionsToProps)(Building);