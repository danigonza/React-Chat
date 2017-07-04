import React, { Component } from 'react'
import Sidebar from './Sidebar/index'
import { connect } from 'react-redux'
import RoomMessagePanel from './RoomMessagePanel/index'

class Chat extends Component {
  render () {
    return (
      <div className='chat'>
        <Sidebar rooms={this.props.rooms} />
        <RoomMessagePanel messages={this.props.messages} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { messages: Object.values(state.messages.byId), rooms: Object.values(state.rooms.byId) }
}

const chat = connect(mapStateToProps)(Chat)

export default chat
