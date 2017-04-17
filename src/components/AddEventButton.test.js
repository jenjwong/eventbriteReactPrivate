import React from 'react';
import AddEventButton from './AddEventButton';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

test('AddEventButton Snapshot', () => {
    const component = shallow(<AddEventButton />);
    const tree = shallowToJson(component);
    expect(tree).toMatchSnapshot();
});
