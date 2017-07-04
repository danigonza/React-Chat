import { combineReducers } from 'redux'
import roomReducer from './roomReducer'
import messageReducer from './messageReducer'

export default combineReducers({
  rooms: roomReducer,
  messages: messageReducer
})
