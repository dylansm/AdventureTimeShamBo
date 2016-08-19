import { NEXT_ROUND, START_ROUND } from './types'

export function enterNextRound (dispatch, round = 1) {
  dispatch({ type: NEXT_ROUND, currentRound: round})
}

export function chooseCharacter (dispatch, id) {
  console.log('id', id)
  dispatch({ type: START_ROUND, id})
}
