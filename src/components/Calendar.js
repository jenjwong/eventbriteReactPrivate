import React, {PureComponent} from 'react';
import {filterEventsByHour} from '../utils';
import {HOURS_DAY} from '../utils/constants';
import {EVENTS_PROP_TYPE} from './constants';

import TimeSlot from './TimeSlot';

import './Calendar.css';

export default class Calendar extends PureComponent {
    static propTypes = {
        events: EVENTS_PROP_TYPE.isRequired,
    }

    _renderTimeSlots() {
        let {events} = this.props;

        return new Array(HOURS_DAY)
            .fill(0)
            .map((item, index) => {
                let hour = index;
                let filteredEvents = filterEventsByHour(events, hour);

                return (
                    <TimeSlot
                        key={hour}
                        hour={hour}
                        events={filteredEvents}
                    />
                )
            });
    }

    render() {
        return (
            <main className="calendar b-r-5">
                {this._renderTimeSlots()}
            </main>
        );
    }
}
