import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
// import reduxThunk from 'redux-thunk'

import reducers from './reducers'

import App from './components/app'
import Main from './components/main'
import Round from './components/round'

require('./stylesheets/base.sass')

const createStoreWithMiddleware = applyMiddleware()(createStore)
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        // <IndexRoute component={Main} />
        <Route component={Main}>
          <Route path='play/:round' component={Round} />
        </Route>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.app-container'))

