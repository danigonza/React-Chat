import React from 'react';
import Message from './Message';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const message = { id: 1, room_id: 1, body: 'Uola', from_id: 1 };
    const tree = renderer.create(
        <Message message={message}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
