import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import TimeSlot from './TimeSlot';
import TimeSlotEvent from './TimeSlotEvent';
import mockData from '../utils/data.js';

test('TimeSlot should render an TimeSlotEvent for event', () => {
    const component = shallow(<TimeSlot events={mockData} hour={1} />);
    expect(component.find(TimeSlotEvent).length).toEqual(50);
});
