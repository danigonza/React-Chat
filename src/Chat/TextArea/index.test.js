import React from 'react';
import TextArea from './index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <TextArea/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('value changes when input is modified', () => {
    // const component = renderer.create(<TextArea/>);
    // let tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
    //
    // // manually trigger the callback
    // tree.props.onMouseEnter();
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
    //
    // // manually trigger the callback
    // tree.props.onMouseLeave();
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
});