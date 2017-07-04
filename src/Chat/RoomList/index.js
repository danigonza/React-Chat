import React, { Component } from 'react'
import Room from './Room'
import { addRoom } from '../../lib/reducers/roomReducer'
import { connect } from 'react-redux'

class RoomList extends Component {
  onClick = () => {
    const id = Date.now()
    this.props.addRoom({id: id, name: `Room ${id}`})
  };

  render () {
    return (
      <div>
        <ul className='room-list'>
          {
                        this.props.rooms.map((room) =>
                          <Room key={room.id} room={room} />
                        )
                    }
        </ul>
        <button onClick={this.onClick}> Add room </button>
      </div>
    )
  }
}

const roomList = connect(null, { addRoom })(RoomList)

export default roomList
