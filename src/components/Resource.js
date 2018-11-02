import React, { Component } from 'react';

export default class Resource extends Component {
  render() {
    return (
      <div>{this.props.type}: {this.props.amount}</div>
    )
  }
}