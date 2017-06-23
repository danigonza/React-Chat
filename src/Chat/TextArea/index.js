import React, { Component } from 'react';
import store from '../../lib/state';
import { addMessage } from '../../lib/reducers/messageReducer';


class TextArea extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
        this.onInput = this.onInput.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onInput(event) {
        this.setState({ text: event.target.value });
    }

    onKeyDown(event) {
        if(event.keyCode === 13){
            store.dispatch(addMessage({ id: Date.now(), room_id: 1, body: event.target.value, from_id: 1 }));
            this.setState({ text: '' })
        }
    }

    render() {
        return <textarea id="" name="" cols="30" rows="10" value={this.state.text} onInput={this.onInput} onKeyDown={this.onKeyDown}></textarea>
    }
}

export default TextArea;
