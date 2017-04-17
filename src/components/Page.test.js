import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import {Page} from './Page';
import TimeSlot from './TimeSlot';
import mockData from '../utils/data.js';

test('Page should render div with class .page__title', () => {
    const component = shallow(<Page events={mockData} day={1492448301160} />);
    expect(component.find('.page__title').length).toEqual(1);
});
