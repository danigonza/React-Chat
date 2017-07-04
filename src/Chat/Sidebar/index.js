import React, { Component } from 'react'
import RoomList from './RoomList/index'
import { addRoom } from '../../lib/reducers/roomReducer'
import { connect } from 'react-redux'

class Sidebar extends Component {
  onClick = () => {
    const id = Date.now()
    this.props.addRoom({id: id, name: `Room ${id}`})
  };

  render () {
    return (
      <div className='left-pane'>
        <div className='menu'>
          <div className='room-title'> Rooms </div>
          <div className='add-room-button' onClick={this.onClick}>
            <i className='material-icons'>add</i>
          </div>
        </div>
        <RoomList rooms={this.props.rooms} />
      </div>
    )
  }
}

const sidebar = connect(null, { addRoom })(Sidebar)

export default sidebar
