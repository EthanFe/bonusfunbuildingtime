import React, { Component } from 'react';
import {addResources} from '../actions/resources-actions'
import {connect} from 'react-redux'

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
      switch (this.props.building.type) {
        case "lumber mill":
          image = "mill"
          break
        case "mine":
          image = "mine"
          break
        default:
      }
    }
    return <img className="tile" src={require(`../images/${image}.png`)} alt=""/>
  }

  mapActionsToProps = (dispatch, props) => {
    // onChangeColor: change.bind(this, props.id)
    // onChangeSuze:
    // onChangesome
  }
}

const mapStatetoProps = () => {
  
}

const mapActionsToProps = {
  addResources: addResources
}

export default connect(mapStatetoProps, mapActionsToProps)(Tile);