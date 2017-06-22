import React, { Component } from 'react';
import MessageList from "./MessageList/index";
import RoomList from "./RoomList/index";

let messages = [
    { id: 1, room_id: 1, body: 'Uola', from_id: 1 },
    { id: 2, room_id: 1, body: 'Q tal', from_id: 2 },
    { id: 3, room_id: 1, body: 'Bien', from_id: 1 }
];

let rooms = [
    { id: 1, name: 'Room 1' },
    { id: 2, name: 'Room 2' },
    { id: 3, name: 'Room 3' },
];

class Chat extends Component {
    render() {
        return (
            <div className="chat">
                <div className="left-pane">
                    <h2> Rooms </h2>
                    <RoomList rooms={rooms}/>
                </div>
                <div className="right-pane">
                    <h2> Messages for room %room% </h2>
                    <div className="message-pane">
                        <MessageList messages={messages}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;
