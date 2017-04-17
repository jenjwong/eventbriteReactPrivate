import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import EventDetailOverlay from './EventDetailOverlay';
import mockData from '../utils/data.js';

test('EventDetailOverlay should render element with id 1', () => {
    const component = shallow(<EventDetailOverlay event={mockData[0]} />);
    expect(component.find('.event-detail-overlay').length).toEqual(1);
});
