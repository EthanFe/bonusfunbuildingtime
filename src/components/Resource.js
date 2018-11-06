import React, { Component } from 'react';

export default class Resource extends Component {
  render() {
    if (this.props.income)
      return <div data-tip={`Income per second: ${Math.floor(this.props.income * 100) / 100}`}>{this.props.type}: {this.props.amount}</div>
    else
      return <div data-tip=''>{this.props.type}: {this.props.amount}</div>
  }
}