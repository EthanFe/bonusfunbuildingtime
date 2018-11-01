import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tile from "./components/Tile"

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addResources} from './actions/resources-actions'

class App extends Component {
  onAddResources = () => {
    this.props.onAddResources("stone", 3)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.onAddResources}>Add Stone</button>
          Stone: {this.props.resources.stone}
          <Tile></Tile>
          <Tile></Tile>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  resources: state.resources,
  grid: state.grid
})

const mapActionsToProps = (dispatch, {id }) => {
  return bindActionCreators({
    onAddResources: addResources
  }, dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(App);
