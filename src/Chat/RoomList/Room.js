import React, { Component } from 'react';
import { deleteRoom } from '../../lib/reducers/roomReducer';
import { connect } from 'react-redux';

class Room extends Component {

    onClick = () => {
        this.props.deleteRoom(this.props.room);
    };

    render() {
        return(
            <li className="room">
                <span>{this.props.room.name}</span>
                <button onClick={this.onClick}> Remove room </button>
            </li>
        )
    }
}

Room = connect(null, { deleteRoom })(Room);

export default Room;
