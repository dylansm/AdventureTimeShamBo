import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Welcome from './welcome'
import Round from './round'
import Scoreboard from './scoreboard'

require('../stylesheets/components/main.sass')

export default class Main extends Component {

  render() {
    const path = this.props.routes.slice().pop().path
    const classNames = require('classnames')
    const mainStateClasses = classNames('main-wrap', this.props.className, {
      'rounds': path === 'play/:round'
    })


    return (
      <div className='main'>
        <div className='row'>
          <div className='col-xs-12 col-md-9'>
            <div className={mainStateClasses}>
              <Welcome />
              <Round />
            </div>
          </div>
          <div className='col-xs-12 col-md-3 ctr'>
            <div className={mainStateClasses}>
              <img src='../src/images/jake.png' alt='' className='jake' />
              <Scoreboard path={path} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

