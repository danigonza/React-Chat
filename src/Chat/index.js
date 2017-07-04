import React, { Component } from 'react'
import Sidebar from './Sidebar/index'
import { connect } from 'react-redux'
import RoomMessagePanel from './RoomMessagePanel/index'
import Home from './Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class Chat extends Component {
  render () {
    return (
      <Router>
        <div className='chat'>
          <Sidebar rooms={this.props.rooms} />
          <Route exact path='/' component={Home} />
          <Route path='/room/:roomId' render={({match}) => (
            <RoomMessagePanel roomId={match.params.roomId} messages={this.props.messages} />
          )} />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return { messages: Object.values(state.messages.byId), rooms: Object.values(state.rooms.byId) }
}

const chat = connect(mapStateToProps)(Chat)

export default chat
