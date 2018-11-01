import Tile from "./Tile"
import React, { Component } from 'react';
import {connect} from 'react-redux'

class GridRow extends Component {
  render() {
    const tiles = []
    for (var x=0; x<this.props.width; x++) {
      const building = this.props.buildings.find(building => building.position.x === x)
      tiles.push(<Tile x={x} building={building} key={x}></Tile>)
    }

    return (
      <div className="row">
        {tiles}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    buildings: state.buildings.filter(building => {
      return building.position.y === props.y
    }),
    width: state.dimensions.x
  }
}

export default connect(mapStateToProps)(GridRow);