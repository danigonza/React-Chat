const ADD = 'chat/message/ADD'

export const addMessage = (message) => ({type: ADD, message})

export const addMessageWithEcho = (message) =>
    (dispatch) => {
      dispatch({type: ADD, message})
      const echoMessage = {id: Date.now(), room_id: message.room_id, body: message.body, from_id: 2}
      setTimeout(() => dispatch({type: ADD, message: echoMessage}), 1000)
    }

function onAddMessage (state, message) {
  return {
    ...state,
    byId: {
      ...state.byId,
      [message.id]: message
    },
    byRoomId: {
      ...state.byRoomId,
      [message.room_id]: {
        byId: {
          ...state.byRoomId[message.room_id].byId,
          [message.id]: state.byId[message.id]
        }
      }
    }
  }
}

export default function messageReducer (state = {byId: [], byRoomId: []}, action) {
  switch (action.type) {
    case ADD:
      return onAddMessage(state, action.message)
    default:
      return state
  }
}
