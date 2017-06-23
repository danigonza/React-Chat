import roomReducer, { addRoom, deleteRoom } from './roomReducer';

describe('roomReducer',()=>{
    it('reducer for ADD', () => {
        let state = {byId: {1: { id: 1, name: 'Room 1' }}};
        let room = { id: 2, name: 'Room 2' };
        let newState = roomReducer(state, addRoom(room));
        expect(newState).toEqual({byId: {1: { id: 1, name: 'Room 1' }, 2: room}});
    });

    it('reducer for DELETE', () => {
        let room = { id: 2, name: 'Room 2' };
        let state = {byId: {1: { id: 1, name: 'Room 1' }, 2: room}};
        let newState = roomReducer(state, deleteRoom(room));
        expect(newState).toEqual({byId: {1: { id: 1, name: 'Room 1' }}});
    });

    it('reducer for unknown action', () => {
        let newState = roomReducer(undefined, {type: "unknown"});
        expect(newState).toEqual({byId:[]});
    });
});