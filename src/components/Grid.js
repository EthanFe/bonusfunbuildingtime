import React, { Component } from 'react';
import GridRow from "./GridRow"
import {connect} from 'react-redux'

class Grid extends Component {
  render() {
    const rows = []
    for (var y=0; y<this.props.height; y++) {
      rows.push(<GridRow y={y}></GridRow>)
    }

    return (
      <div className="grid">
        {rows}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  height: state.dimensions.y
})

export default connect(mapStateToProps)(Grid);