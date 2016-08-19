import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

require('../stylesheets/components/welcome.sass')

class Welcome extends Component {
  onBeginClick () {
    const currentRound = this.props.currentRound

    browserHistory.push(`/play/${currentRound}`)
  }

  render() {
    return (
      <div className='welcome'>
        <h2>AdventureTimeShamBo</h2>
        <h4>How to play</h4>
        <p>Choose a character and go to battle (emotional, intellectual, metaphysical battle, of course) against other Adventure Time characters. The game will automatically choose a random character when you make a choice in each round. The scoreboard will keep a running tally.</p>
        <div className='input-group'>
          <button className='btn btn-primary ctr' onClick={this.onBeginClick.bind(this)}>Begin</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { currentRound: state.rounds.currentRound }
}

export default connect(mapStateToProps)(Welcome)
