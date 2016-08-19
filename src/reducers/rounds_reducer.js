import { NEXT_ROUND, START_ROUND, CHARACTER_CHOSEN } from '../actions/types'

const INITIAL_STATE = { currentRound: 1, scores: [] }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case NEXT_ROUND:
      return { ...state, currentRound: action.currentRound }
    case START_ROUND:
      return { ...state, currentRound: action.currentRound, playStarted: action.playStarted, statusMessage: action.statusMessage }
    case CHARACTER_CHOSEN:
      return { ...state, currentRound: action.currentRound, roundComplete: true, statusMessage: action.statusMessage }
  }
  return state
}
