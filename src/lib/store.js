import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger';
import reducer from './reducers/index';
import { addRoom } from './reducers/roomReducer';
import thunk from 'redux-thunk';

const logger = createLogger();

let rooms = [
    { id: 1, name: 'Room 1' },
    { id: 2, name: 'Room 2' },
    { id: 3, name: 'Room 3' }
];

const store = createStore(reducer, applyMiddleware(logger, thunk));

rooms.forEach( (room, index) =>
    store.dispatch(addRoom(room))
);

export default store;