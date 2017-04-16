import React, {PureComponent, PropTypes} from 'react';
import {EVENT_PROP_TYPE} from './constants';
import {isEventPassed} from '../utils/index';

import './TimeSlotEvent.css';

export default class TimeSlotEvent extends PureComponent {
    static propTypes = {
        event: EVENT_PROP_TYPE.isRequired,
        onSelect: PropTypes.func.isRequired,
    }

    render() {
        let {
            event: {title, start, color},
            onSelect,
        } = this.props;

        // TODO: Need a way to determine that the event is in the past so that it
        // can be displayed faded-out
        let displayColor;
        isEventPassed(start) ?  displayColor = color :  displayColor = 'gray half-opacity';

        return (
            <button className={`time-slot-event time-slot-event ${displayColor}`} onClick={onSelect}>
                {title}
            </button>
        );
    }
}
