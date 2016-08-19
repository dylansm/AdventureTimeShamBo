import { SCREEN_RESIZE, SCROLLING } from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case SCREEN_RESIZE:
      return { ...state, windowSize: action.size }
    case SCROLLING:
      return { ...state, scrollTop: action.scrollTop }
  }
  return state
}
