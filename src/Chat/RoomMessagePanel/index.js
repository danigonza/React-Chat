import React, { Component } from 'react'

class RoomMessagePanel extends Component {
  render () {
    return (
      <div className='right-pane'>
        <div className='menu'>
          <div className='back'><i className='material-icons'>keyboard_arrow_left</i></div>
          <div className='room-title'>Messages for room {this.props.roomId}</div>
        </div>
      </div>
    )
  }
}

export default RoomMessagePanel
