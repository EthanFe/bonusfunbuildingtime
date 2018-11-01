import React, { Component } from 'react';
import './components/styles.css';
import MainView from "./components/MainView"

// import {bindActionCreators} from 'redux'
// import {addResources} from './actions/resources-actions'

export default class App extends Component {
  // onAddResources = () => {
  //   this.props.onAddResources("stone", 3)
  // }

  render() {
    return (
      <MainView/>
    );
  }
}

// const mapActionsToProps = (dispatch, {id }) => {
//   return bindActionCreators({
//     onAddResources: addResources
//   }, dispatch)
// }