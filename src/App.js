import React, { Component } from 'react'
import logo from './box.svg'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='ef'>
        <div className='ef__content'>
          <img
            src={logo}
            className='ef-logo'
            alt='logo'
          />
          <h2 className='ef__title'>
            <a href='https://github.com/evilfactory-id'>
              evilfactory.id
            </a>
          </h2>
        </div>
      </div>
    )
  }
}

export default App
