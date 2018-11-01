import React, { Component } from 'react';
import {addResources} from '../actions/resources-actions'
import {connect} from 'react-redux'
import {buildingTypesByName} from '../data'

class Tile extends Component {
  componentDidMount() {
    if (this.props.building) {
      this.startResourceTicks()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.building && this.props.building !== prevProps.building) {
      this.startResourceTicks()
    }
  }

  startResourceTicks = () => {
    this.gatherInterval = setInterval(this.generateResource, 1000)
    console.log(`beginning to gather from ${this.props.building.type}`)
  }

  generateResource = () => {
    this.props.addResources(this.props.building.type, 1)
  }

  render() {
    let image = "grass"
    if (this.props.building) {
      image = buildingTypesByName[this.props.building.type].image + "_grass"
    }
    return <img className="tile" src={require(`../images/${image}.png`)} alt=""/>
  }
}

const mapStateToProps = (state, props) => {
  return {
    building: state.buildings.find(building => {
      return building.position.y === props.y && building.position.x === props.x
    })
  }
}

const mapActionsToProps = {
  addResources: addResources
}

export default connect(mapStateToProps, mapActionsToProps)(Tile);