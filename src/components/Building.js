import React, { Component } from 'react';
import {connect} from 'react-redux'
import {buildingTypesByName} from '../data'
import {selectBuilding} from '../actions/building-actions'
import { isBuildable } from '../gameFunctions';

class Building extends Component {
  render() {
    let image = buildingTypesByName[this.props.type].image
    let className = "building-icon"
    if (isBuildable(this.props.type, this.props.resources))
      className += " buildable"
    if (this.props.selected)
      className += " selected"
    return <img onClick={this.selectBuilding} className={className} src={require(`../images/${image}.png`)} alt=""/>
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