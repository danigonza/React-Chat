import React, { Component } from 'react'
import { deleteRoom } from '../../../lib/reducers/roomReducer'
import { connect } from 'react-redux'

class Room extends Component {
  onClick = () => {
    this.props.deleteRoom(this.props.room)
  };

  render () {
    return (
      <li className='room'>
        <span>{this.props.room.name}</span>
        <div className='delete-room-button ' onClick={this.onClick}>
          <i className='material-icons'>delete</i>
        </div>
      </li>
    )
  }
}

const room = connect(null, { deleteRoom })(Room)

export default room
