import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import TimeSlotEvent from './TimeSlotEvent';
import mockData from '../utils/data.js';

test('TimeSlotEvent should render element with id 1', () => {
    const component = shallow(<TimeSlotEvent event={mockData[0]} />);
    expect(component.find('.time-slot-event').length).toEqual(1);
});
