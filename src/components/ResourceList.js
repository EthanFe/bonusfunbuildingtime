import React, { Component } from 'react';
import Resource from "./Resource"
import {connect} from 'react-redux'

class ResourceList extends Component {
  render() {
    return (
      <div className="resource-list">
        {this.props.resources.map(resource => <Resource type={resource.type} amount={resource.amount}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  resources: state.resources
})

export default connect(mapStateToProps)(ResourceList);