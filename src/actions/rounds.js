import { CHARACTER_CHOSEN, NEXT_ROUND, START_ROUND } from './types'
import find from 'lodash/find'

const CHARACTERS = [
  {name: 'Finn', id: 'f'},
  {name: 'Marceline', id: 'm'},
  {name: 'Jake', id: 'j'},
  {name: 'Ice King', id: 'ik'},
  {name: 'Princess Bubblegum', id: 'pb'}
]

export function playRound (round = 1) {
  return function(dispatch) {
    dispatch({ type: START_ROUND, currentRound: round, playStarted: true, statusMessage: 'Choose a character'})
  }
}

export function chooseCharacter (id) {
  const randomCharacter = getRandomChoice()
  return function(dispatch) {
    dispatch({ type: CHARACTER_CHOSEN, characterId: id, randomId: randomCharacter.id, statusMessage: `You chose: ${getNameById()}. The Cosmic Owl Chose: ${randomCharacter.name}` })
  }
}

export function nextRound (round) {
  return function(dispatch) {
    dispatch({ type: NEXT_ROUND, currentRound: round })
  }
}

function getNameById (id) {
  const char = find(CHARACTERS, id)
  return char.name
}

function getRandomChoice () {
  const randomInt = Math.floor((Math.random() * CHARACTERS.length))
  return CHARACTERS[randomInt]
}
