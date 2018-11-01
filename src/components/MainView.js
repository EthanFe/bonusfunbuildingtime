import React, { Component } from 'react';
import Grid from "./Grid"
import BuildingList from "./BuildingList"
import ResourceList from "./ResourceList"

export default class MainView extends Component {
  render() {
    return (
      [
      <div className="grid-view">
        <Grid/>
        <BuildingList/>
      </div>,
      <ResourceList/>
      ]
    )
  }
}
