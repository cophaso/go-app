import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddItineraryForm from './AddItineraryForm';

describe(`AddItineraryForm component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  }

  it('renders a form.AddItineraryForm by default', () => {
    const wrapper = shallow(<AddItineraryForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the AddItineraryForm given props', () => {
    const wrapper = shallow(<AddItineraryForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
