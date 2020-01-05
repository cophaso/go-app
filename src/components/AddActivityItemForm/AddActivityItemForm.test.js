import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddActivityItemForm from './AddActivityItemForm';

describe(`AddActivityItemForm component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  };

  it('renders a form.AddActivityItemForm by default', () => {
    const wrapper = shallow(<AddActivityItemForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders the AddActivityItemForm given props', () => {
    const wrapper = shallow(<AddActivityItemForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
