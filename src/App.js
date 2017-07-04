import React, { Component } from 'react'
import './App.css'
import Chat from './Chat/.'
import { Provider } from 'react-redux'
import store from './lib/store'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Chat />
      </Provider>
    )
  }
}

export default App
