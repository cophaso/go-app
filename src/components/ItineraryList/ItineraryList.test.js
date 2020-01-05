import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ItineraryList from './ItineraryList';

describe(`ItineraryList component`, () => {
  const props = {
    itinerary: {
      "id": 1,
      "title": "test"
    }
  };

  it('renders the ItineraryList given props', () => {
    const wrapper = shallow(<ItineraryList {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
