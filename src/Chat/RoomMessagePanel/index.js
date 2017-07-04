import React, { Component } from 'react'
import MessageList from './MessageList/index'
import TextArea from './TextArea/index'

class RoomMessagePanel extends Component {
  render () {
    return (
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
    )
  }
}

export default RoomMessagePanel
