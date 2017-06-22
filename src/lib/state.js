import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger';
import messageReducer, { addMessage } from './reducers/messageReducer';

const logger = createLogger();

let messages = [
    { id: 1, room_id: 1, body: 'Uola', from_id: 1 },
    { id: 2, room_id: 1, body: 'Q tal', from_id: 2 },
    { id: 3, room_id: 1, body: 'Bien', from_id: 1 }
];

const store = createStore(messageReducer, applyMiddleware(logger));

messages.forEach( (message, index) =>
    setTimeout((() => store.dispatch(addMessage(message))), 1000 * index)
);

export default store;