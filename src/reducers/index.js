import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
// import appReducer from './app_reducer'
import roundsReducer from './rounds_reducer'

const rootReducer = combineReducers({
  // app: appReducer
  rounds: roundsReducer
})

export default rootReducer
