import React, {PureComponent} from 'react';
import {EVENT_PROP_TYPE} from './constants';
import {getDisplayDate, getDisplayHour} from '../utils';

import './EventDetails.css';

export default class EventDetails extends PureComponent {
    static propTypes = {
        event: EVENT_PROP_TYPE.isRequired,
    }

    render() {
        let {event} = this.props;
        let {title, description, start, color, hours} = event;
        let displayDate = getDisplayDate(start);
        let startHour = (new Date(start)).getHours();
        let endHour = startHour + hours;
        let startHourDisplay = getDisplayHour(startHour)
        let endHourDisplay = getDisplayHour(endHour);
        let displayDateTime = `${displayDate} ${startHourDisplay} - ${endHourDisplay}`

        return (
            <div>
                <div>
                    {displayDateTime}
                    <span
                        className={`event-detail-overlay__color ${color}`}
                    />
                </div>
                <h1 className="event-detail-overlay__title">
                    {title}
                </h1>
                <p>{description}</p>
            </div>
        );
    }
}
