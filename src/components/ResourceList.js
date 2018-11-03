import React, { Component } from 'react';
import Resource from "./Resource"
import {connect} from 'react-redux'
import { buildingTypesByName } from '../data';

class ResourceList extends Component {
  render() {
    return (
      <div className="resource-list">
        {this.props.resources.map(resource => <Resource type={resource.type}
                                                        amount={resource.amount}
                                                        income={this.props.income[resource.type]}
                                                        key={resource.type}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const income = {}
  for (const building of state.buildings) {
    const productionInfo = buildingTypesByName[building.type].production
    for (const resourceType of productionInfo) {
      income[resourceType.resource] = income[resourceType.resource] || 0
      income[resourceType.resource] += resourceType.amount / resourceType.time
    }
  }
  return {
    resources: state.resources,
    income: income
    // income: state.buildings.reduce((income, building => {
    //   const productionInfo = buildingTypesByName[building.type].production
    //   for (const resourceType of productionInfo) {
    //     income[resourceType.resource] = income[resourceType.resource] || 0
    //     income[resourceType.resource] += resourceType.amount / resourceType.time
    //   }
    // }), new Object)
  }
}

export default connect(mapStateToProps)(ResourceList);