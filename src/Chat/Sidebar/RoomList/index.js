import React, { Component } from 'react'
import Room from './Room'

class RoomList extends Component {
  render () {
    return (
      <div>
        <ul className='room-list'>
          { this.props.rooms.map((room) => <Room key={room.id} room={room} />) }
        </ul>
      </div>
    )
  }
}

export default RoomList
