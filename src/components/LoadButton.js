import React, { Component } from 'react';
import {connect} from 'react-redux'
import { loadGame } from '../actions/persistence-actions';

class LoadButton extends Component {
  render() {
    return (
      <button onClick={this.loadData} className="load-button">Load Game</button>
    )
  }

  loadData = () => {
    const base_url = "http://localhost:3000/"
    const url = base_url + "load"

    fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.result === "success") {
        this.props.loadGame(JSON.parse(data.gameData))
      } else {
        console.error("failed to load game")
        console.error("error message: ", data.error)
      }
    })
  }
}

const mapStateToProps = (state, props) => {
  return {}
}

const mapActionsToProps = {
  loadGame: loadGame
}

export default connect(mapStateToProps, mapActionsToProps)(LoadButton);