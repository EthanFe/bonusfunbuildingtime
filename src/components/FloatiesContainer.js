import React, { Component } from 'react';
import ResourceGainFloaty from './ResourceGainFloaty';
import {connect} from 'react-redux'
import { removeResourceFloaty } from '../actions/resources-actions';

class FloatiesContainer extends Component {
  componentDidMount() {
    this.interval = setInterval(this.updateFloatyAliveness, 1000 / 60)
  }

  updateFloatyAliveness = () => {
    const floatyLifeTime = 2.5 // seconds
    for (const gainedResource of this.props.recentlyGainedResources) {
      if (new Date().getTime() - gainedResource.timeGained > floatyLifeTime * 1000)
        this.props.removeResourceFloaty(gainedResource)
    }
  }

  render() {
    return (
      <div className="resource-floaties">
        {this.props.recentlyGainedResources.map(gainedResource => <ResourceGainFloaty
        type={gainedResource}
        origin={gainedResource.origin}
        amount={gainedResource.amount}
        key={gainedResource.timeGained + gainedResource.origin.x + gainedResource.origin.y}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state.recentlyGainedResources)
  return {
    recentlyGainedResources: state.recentlyGainedResources
  }
}

const mapActionsToProps = {
  removeResourceFloaty: removeResourceFloaty
}

export default connect(mapStateToProps, mapActionsToProps)(FloatiesContainer);