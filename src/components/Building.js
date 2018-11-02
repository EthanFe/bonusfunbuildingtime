import React, { Component } from 'react';
import {connect} from 'react-redux'
import {buildingTypesByName} from '../data'
import {selectBuilding} from '../actions/building-actions'
import { isBuildable } from '../gameFunctions';
import { capitalize } from '../funtimes';

class Building extends Component {
  render() {
    let image = this.buildingData().image
    let className = "building-icon"
    if (isBuildable(this.props.type, this.props.resources))
      className += " buildable"
    if (this.props.selected)
      className += " selected"
    return <img data-tip={this.getTooltip()} onClick={this.selectBuilding} className={className} src={require(`../images/${image}.png`)} alt=""/>
  }

  getTooltip = () => {
    let tooltip = capitalize(this.props.type)
    const costs = this.buildingData().cost
    for (const resource in costs) {
      tooltip += `<br>${resource} cost: ${costs[resource]}`
    }
    return tooltip
  }

  buildingData = () => {
    return buildingTypesByName[this.props.type]
  }

  selectBuilding = () => {
    if (isBuildable(this.props.type, this.props.resources))
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