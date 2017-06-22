import React, { Component } from 'react';
import './App.css';
import Chat from './Chat/.';
import { Provider } from 'react-redux';
import state from './lib/state';


class App extends Component {
  render() {
    return (
        <Provider store={state}>
          <Chat/>
        </Provider>
    );
  }
}

export default App;
