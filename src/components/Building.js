import React, { Component } from 'react';
import {connect} from 'react-redux'
import {buildingTypesByName} from '../data'

class Building extends Component {
  render() {
    let image = buildingTypesByName[this.props.type].image
    return <img className="building-icon" src={require(`../images/${image}.png`)} alt=""/>
  }
}

const mapStateToProps = state => ({
  resources: state.resources
})

export default connect(mapStateToProps)(Building);