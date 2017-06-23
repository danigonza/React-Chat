import React, { Component } from 'react';
import MessageList from "./MessageList/index";
import RoomList from "./RoomList/index";
import TextArea from './TextArea/index';
import { connect } from 'react-redux';

class Chat extends Component {
    render() {
        return (
            <div className="chat">
                <div className="left-pane">
                    <h2> Rooms </h2>
                    <RoomList rooms={this.props.rooms}/>
                </div>
                <div className="right-pane">
                    <h2> Messages for room %room% </h2>
                    <div className="message-pane">
                        <MessageList messages={this.props.messages}/>
                    </div>
                    <div className="compose-pane">
                        <TextArea/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { messages: Object.values(state.messages.byId), rooms: Object.values(state.rooms.byId) }
};

Chat = connect(mapStateToProps)(Chat);

export default Chat;
