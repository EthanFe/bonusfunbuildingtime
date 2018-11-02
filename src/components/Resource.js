import React, { Component } from 'react';

export default class Resource extends Component {
  render() {
    return (
      <div data-tip={`ok this doesnt do anything but imagine if it showed income rates`}>{this.props.type}: {this.props.amount}</div>
    )
  }
}