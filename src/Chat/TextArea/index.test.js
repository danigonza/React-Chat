import React from 'react';
import TextArea from './index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <TextArea/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
