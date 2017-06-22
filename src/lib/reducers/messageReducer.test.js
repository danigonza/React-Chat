import messageReducer, { addMessage } from './messageReducer';

describe('messageReducer',()=>{
    it('reducer for ADD', () => {
        let state = {byId: {1:  { id: 1, room_id: 1, body: 'Uola', from_id: 1 }}};
        let message = { id: 2, room_id: 1, body: 'Uola', from_sid: 2 };
        let newState = messageReducer(state, addMessage(message));
        expect(newState).toEqual({byId: {1:  { id: 1, room_id: 1, body: 'Uola', from_id: 1 }, 2: message}});
    });

    it('reducer for unknown action', () => {
        let newState = messageReducer(undefined, {type: "unknown"});
        expect(newState).toEqual({byId:[]});
    });
});