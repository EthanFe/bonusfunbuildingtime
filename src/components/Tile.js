import React, { Component } from 'react';
import {connect} from 'react-redux'
import {buildingTypesByName} from '../data'
import {addResources} from '../actions/resources-actions'
import {removeMouseover} from '../actions/mouseover-actions'
import {mouseOverTile} from '../actions/mouseover-actions'

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
    let className = "tile"
    if (this.props.building) {
      image = buildingTypesByName[this.props.building.type].image + "_grass"
    } else if (this.props.mousedOver && this.props.selectedBuilding) {
      image = buildingTypesByName[this.props.selectedBuilding].image + "_grass"
      className += " building-ghost"
    }
    return <img onMouseEnter={this.setMousedOver} onMouseLeave={this.removeMouseover} className={className} src={require(`../images/${image}.png`)} alt=""/>
  }

  setMousedOver = (event) => {
    this.props.mouseOverTile(this.coords())
  }

  removeMouseover = (event) => {
    this.props.removeMouseover(this.coords())
  }
  
  coords = () => {
    return `${this.props.x},${this.props.y}`
  }
}

const mapStateToProps = (state, props) => {
  return {
    building: state.buildings.find(building => {
      return building.position.y === props.y && building.position.x === props.x
    }),
    mousedOver: state.mousedOverTile === `${props.x},${props.y}`,
    selectedBuilding: state.selectedBuilding
  }
}

const mapActionsToProps = {
  addResources: addResources,
  mouseOverTile: mouseOverTile,
  removeMouseover: removeMouseover
}

export default connect(mapStateToProps, mapActionsToProps)(Tile);