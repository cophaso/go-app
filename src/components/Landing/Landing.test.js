import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Landing from './Landing';

describe(`Landing component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  };

  it('renders a Landing by default', () => {
    const wrapper = shallow(<Landing />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders the Landing given props', () => {
    const wrapper = shallow(<Landing {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
