import React, { Component } from 'react';
import Grid from "./Grid"
import BuildingList from "./BuildingList"
import ResourceList from "./ResourceList"
import ReactTooltip from 'react-tooltip'

export default class MainView extends Component {
  render() {
    return (
      <div className="main-view">
        <div className="grid-view">
          <Grid/>
          <BuildingList/>
        </div>
        <ResourceList/>
        <ReactTooltip multiline="true" effect="solid" place="bottom" type="success" />
      </div>
    )
  }
}
