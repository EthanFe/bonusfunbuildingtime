import Tile from "./Tile"
import React, { Component } from 'react';
import {connect} from 'react-redux'

class GridRow extends Component {
  render() {
    const tiles = []
    for (var x=0; x<this.props.width; x++) {
      tiles.push(<Tile x={x} y={this.props.y} key={x}></Tile>)
    }

    return (
      <div className="row">
        {tiles}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    width: state.dimensions.x
  }
}

export default connect(mapStateToProps)(GridRow);