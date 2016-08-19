import { NEXT_ROUND } from '../actions/types'

const INITIAL_STATE = { currentRound: 1, scores: [] }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case NEXT_ROUND:
      return { ...state, currentRound: action.currentRound }
  }
  return state
}
