import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger';
import reducer from './reducers/index';
import { addMessage } from './reducers/messageReducer';
import { addRoom } from './reducers/roomReducer';

const logger = createLogger();

let messages = [
    { id: 1, room_id: 1, body: 'Uola', from_id: 1 },
    { id: 2, room_id: 1, body: 'Q tal', from_id: 2 },
    { id: 3, room_id: 1, body: 'Bien', from_id: 1 }
];

let rooms = [
    { id: 1, name: 'Room 1' },
    { id: 2, name: 'Room 2' },
    { id: 3, name: 'Room 3' }
];

const store = createStore(reducer, applyMiddleware(logger));

messages.forEach( (message, index) =>
    setTimeout((() => store.dispatch(addMessage(message))), 1000 * index)
);

rooms.forEach( (room, index) =>
    store.dispatch(addRoom(room))
);

export default store;