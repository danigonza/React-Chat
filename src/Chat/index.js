import React, { Component } from 'react'
import MessageList from './MessageList/index'
import RoomList from './RoomList/index'
import TextArea from './TextArea/index'
import { connect } from 'react-redux'

class Chat extends Component {
  render () {
    return (
      <div className='chat'>
        <div className='left-pane'>
          <div className='menu'>
            <div className='room-title'> Rooms </div>
          </div>
          <RoomList rooms={this.props.rooms} />
        </div>
        <div className='right-pane'>
          <div className='menu'>
            <div className='back'><i className='fa fa-chevron-left' /></div>
            <div className='room-title'>Messages for room %room%</div>
          </div>
          <div className='message-pane'>
            <MessageList messages={this.props.messages} />
          </div>
          <div className='compose-pane'>
            <TextArea />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { messages: Object.values(state.messages.byId), rooms: Object.values(state.rooms.byId) }
}

const chat = connect(mapStateToProps)(Chat)

export default chat
