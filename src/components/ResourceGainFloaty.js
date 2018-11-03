import React, { Component } from 'react';

export default class ResourceGainFloaty extends Component {
  componentDidMount() {
    this.interval = setInterval(this.updatePosition, 1000 / 60)
    this.setState({x: this.props.origin.x * 64 + 128, y: this.props.origin.y * 64 + 128, opacity: 1.0})
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  updatePosition = () => {
    this.setState({y: this.state.y - 0.75, opacity: this.state.opacity - 0.0075})
  }

  render() {
    if (this.state) {
      return (
        <div className={"resource-floaty-text"} style={{top: this.state.y, left: this.state.x, opacity: this.state.opacity}}>
          <img className={"resource-floaty-image"} src={require(`../images/${this.props.type.type}.png`)} alt=""/>
          {`: +${this.props.amount}`}
        </div>
      )
    } else {
      return null
    }
  }
}