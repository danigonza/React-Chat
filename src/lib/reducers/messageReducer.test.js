import messageReducer, { addMessage } from './messageReducer'

describe('messageReducer', () => {
  it('reducer for ADD', () => {
    let state = {}
    state = {
      byId: {1: { id: 1, room_id: 101, body: 'Uola', from_id: 1 }},
      byRoomId: {
        101: {byId: {
          1: { id: 1, room_id: 101, body: 'Uola', from_id: 1 }
        }}
      }
    }
    let message = { id: 2, room_id: 101, body: 'Uola', from_id: 2 }
    let resultState = {
      byId: {
        1: { id: 1, room_id: 101, body: 'Uola', from_id: 1 },
        2: message
      },
      byRoomId: {
        101: {byId: {
          1: { id: 1, room_id: 101, body: 'Uola', from_id: 1 },
          2: message
        }}}
    }
    let newState = messageReducer(state, addMessage(message))
    expect(newState).toEqual(resultState)
  })

  it('reducer for unknown action', () => {
    let newState = messageReducer(undefined, {type: 'unknown'})
    expect(newState).toEqual({byId: [], byRoomId: []})
  })
})
