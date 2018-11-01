import React, { Component } from 'react';
import './App.css';
import MainView from "./components/MainView"

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addResources} from './actions/resources-actions'

class App extends Component {
  onAddResources = () => {
    this.props.onAddResources("stone", 3)
  }

  render() {
    return (
      <MainView/>
    );
  }
}

const mapStateToProps = state => ({
  // resources: state.resources,
  // grid: state.grid
})

const mapActionsToProps = (dispatch, {id }) => {
  return bindActionCreators({
    onAddResources: addResources
  }, dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(App);