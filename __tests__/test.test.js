/* eslint-env jest */

// import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../pages/index.js'

import { formatQuote } from '../helpers/format-html';

describe.skip('With Enzyme', () => {
  it('App shows "Hello world!"', () => {
    // const app = shallow(<App />)

    // expect(app.find('p').text()).toEqual('Hello World!')
  })
})

describe.skip('With Snapshot Testing', () => {
  it('App shows "Hello world!"', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('functions', () => {
  const string = 'I am a string';
  const result = formatQuote(string);
  const expectedResult = `<p class='copy-text text-left' style="${quoteStyle}">I am a string</p>`;
  expect(result).toEqual(expectedResult);
})