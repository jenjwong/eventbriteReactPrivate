import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {EVENT_PROP_TYPE} from './constants';
import {isEventPassed} from '../utils/index';

import './TimeSlotEvent.css';

export default class TimeSlotEvent extends PureComponent {
    static propTypes = {
        event: EVENT_PROP_TYPE.isRequired,
    }

    render() {
        let {
            event: {title, start, color, id}
        } = this.props;

        // TODO: Need a way to determine that the event is in the past so that it
        // can be displayed faded-out
        let displayColor;
        isEventPassed(start) ?  displayColor = 'gray half-opacity' : displayColor = color;

        return (
            <Link to={{ pathname: `/details/${id}` }}>
                <div className={`time-slot-event time-slot-event b-r-5 ${displayColor}`}>
                    {title}
                </div>
            </Link>
        );
    }
}
