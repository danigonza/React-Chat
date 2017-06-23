import React, { Component } from 'react';
import Message from "./Message";

class MessageList extends Component {
    render() {
        return (
            <ul className="message-list">
                {
                    this.props.messages.map ((message) =>
                        <Message key={message.id} message={message}/>
                    )
                }
            </ul>
        );
    }
}

export default MessageList;
