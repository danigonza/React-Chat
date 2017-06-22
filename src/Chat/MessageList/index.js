import React, { Component } from 'react';
import Message from "./Message";

class MessageList extends Component {
    render() {
        return (
            <div className="message-list">
                <ul>
                    {
                        this.props.messages.map ((message) =>
                            <Message key={message.id} message={message}/>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default MessageList;
