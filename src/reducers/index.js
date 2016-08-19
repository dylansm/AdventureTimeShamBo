import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import appReducer from './app_reducer'

const rootReducer = combineReducers({
  app: appReducer
})

export default rootReducer
