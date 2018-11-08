import React, { Component } from 'react';
import Grid from "./Grid"
import BuildingList from "./BuildingList"
import ResourceList from "./ResourceList"
import ReactTooltip from 'react-tooltip'
import FloatiesContainer from './FloatiesContainer';
import SaveButton from './SaveButton';
import LoadButton from './LoadButton';
import {connect} from 'react-redux'
import { addResources } from '../actions/resources-actions';

// socket.on('connect', function(){});
// socket.on('event', function(data){});
// socket.on('disconnect', function(){});

class MainView extends Component {
  componentDidMount = () => {
    const socket = require('socket.io-client')('http://localhost:3000');
    socket.on('resourceGained', ({resourceType, amount, origin, totalResources}) => {
      this.props.addResources(resourceType, amount, origin, new Date().getTime(), totalResources)
    });
  }

  render() {
    return (
      <div className="main-view">
        <div className="grid-view">
          <Grid/>
          <BuildingList/>
        </div>
        <ResourceList/>
        <SaveButton></SaveButton>
        <LoadButton></LoadButton>
        <FloatiesContainer></FloatiesContainer>
        <ReactTooltip multiline={true} effect="solid" place="bottom" type="success" />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {}
}

const mapActionsToProps = {
  addResources: addResources
}

export default connect(mapStateToProps, mapActionsToProps)(MainView);