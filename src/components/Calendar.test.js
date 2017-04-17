import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import Calendar from './Calendar';
import TimeSlot from './TimeSlot';
import mockData from '../utils/data.js';

test('Calendar should render an TimeSlot card for each hour in day', () => {
    const component = shallow(<Calendar events={mockData} />);
    expect(component.find(TimeSlot).length).toEqual(24);
});
