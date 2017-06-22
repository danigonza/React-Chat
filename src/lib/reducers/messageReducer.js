const ADD = 'chat/message/ADD';

export const addMessage  = (message) => ({type: ADD, message});

function onAddMessage(state, message){
    return {
        ...state,
        byId: { ...state.byId, [message.id]: message }
    };
}

export default function messageReducer(state = {byId: []}, action){
    switch(action.type){
        case ADD:
            return onAddMessage(state, action.message);
        default:
            return state;
    }
}
