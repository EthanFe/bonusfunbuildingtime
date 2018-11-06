import React, { Component } from 'react';
import {connect} from 'react-redux'

class SaveButton extends Component {
  render() {
    return (
      <button onClick={this.saveData} className="save-button">Save Game</button>
    )
  }

  saveData = () => {
    const base_url = "http://localhost:3000/"
    const url = base_url + "save"

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(this.props),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(console.log)
  }
}

const mapStateToProps = (state, props) => {
  return {
    resources: state.resources,
    buildings: state.buildings,
    dimensions: state.dimensions
  }
}

export default connect(mapStateToProps)(SaveButton);