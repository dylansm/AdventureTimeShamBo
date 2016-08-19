import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateScreenSize, updateScrollTop } from '../actions/app'

class App extends Component {

  componentWillMount () {
    // const updateSize = () => {
      // this.props.updateScreenSize({width: window.innerWidth, height: window.innerHeight})
    // }

    // const updateScrollTop = () => {
      // this.props.updateScrollTop(window.scrollY)
    // }

    // window.addEventListener('resize', () => {
      // updateSize()
    // })

    // window.addEventListener('scroll', () => {
      // updateScrollTop()
    // })

    // updateSize()
    // updateScrollTop()
  }

  render () {
    return (
      <div className='container-fluid'>
        <div className='margin-reset row'>
          <div className='col col-xs-12 padding-reset'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ updateScreenSize, updateScrollTop }, dispatch)
}

export default connect (null, mapDispatchToProps)(App)
