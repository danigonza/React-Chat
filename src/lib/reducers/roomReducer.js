const ADD = 'chat/room/ADD';
const DELETE = 'chat/room/DELETE';

export const addRoom  = (room) => ({type: ADD, room});
export const deleteRoom  = (room) => ({type: DELETE, room});

function onAddRoom(state, room){
    return {
        ...state,
        byId: { ...state.byId, [room.id]: room }
    };
}

function onDeleteRoom(state, room){
    let newState = Object.assign({}, state);
    delete newState.byId[room.id];
    return newState;
}

export default function roomReducer(state = {byId: []}, action){
    switch(action.type){
        case ADD:
            return onAddRoom(state, action.room);
        case DELETE:
            return onDeleteRoom(state, action.room);
        default:
            return state;
    }
}
