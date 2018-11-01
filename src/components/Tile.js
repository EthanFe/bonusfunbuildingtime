import React, { Component } from 'react';

export default class Tile extends Component {
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