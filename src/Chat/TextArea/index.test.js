import React from 'react'
import TextArea from './index'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import store from '../../lib/store'

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <TextArea />
    </Provider>
    ).toJSON()
  expect(tree).toMatchSnapshot()
})
