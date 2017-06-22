import React, { Component } from 'react';
import MessageList from "./MessageList/index";

let messages = [
    {id: 1, room_id: 1, body: 'Uola', from_id: 1 },
    { id: 2, room_id: 1, body: 'Q tal', from_id: 2 },
    { id: 3, room_id: 1, body: 'Bien', from_id: 1 }
];

class Chat extends Component {
    render() {
        return (
            <div className="chat">
                <div className="message-pane">
                    <MessageList messages={messages}/>
                </div>
            </div>
        );
    }
}

export default Chat;
