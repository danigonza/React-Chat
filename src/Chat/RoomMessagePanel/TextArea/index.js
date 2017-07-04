import React, { Component } from 'react'
import { addMessage, addMessageWithEcho } from '../../../lib/reducers/messageReducer'
import { connect } from 'react-redux'

class TextArea extends Component {
  constructor (props) {
    super(props)
    this.state = { text: '' }
    this.onInput = this.onInput.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  onInput (event) {
    this.setState({ text: event.target.value })
  }

  onKeyDown (event) {
    if (event.keyCode === 13) {
      this.props.addMessageWithEcho({ id: Date.now(), room_id: 1, body: event.target.value, from_id: 1 })
      this.setState({ text: '' })
    }
  }

  render () {
    return <textarea id='' name='' cols='30' rows='10' placeholder='Type here!' value={this.state.text} onInput={this.onInput} onKeyDown={this.onKeyDown} />
  }
}

const textArea = connect(null, { addMessage, addMessageWithEcho })(TextArea)

export default textArea
