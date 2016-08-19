import React, { Component } from 'react'
import { connect } from 'react-redux'

require('../stylesheets/components/scoreboard.sass')

class Scoreboard extends Component {
  render () {
    return (
      <div className='scoreboard'>
        <h2>Scoreboard</h2>
      </div>
    )
  }

}
function mapStateToProps (state) {
  return {
    currentRound: state.rounds.currentRound,
    scores: state.rounds.scores
  }
}

export default connect(mapStateToProps)(Scoreboard)
