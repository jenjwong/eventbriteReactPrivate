import React, {PureComponent} from 'react';
import Calendar from './Calendar';
import EventDetailOverlay from './EventDetailOverlay';
import {filterEventsByDay, getEventFromEvents, getDisplayDate} from '../utils';
import DATA_SET from '../utils/data';
import {MILLISECONDS_DAY} from '../utils/constants';
import { connect } from 'react-redux';
import { setSelectedEventId, setDay } from '../actions/actionCreators';

import './Page.css';

const DayNavigator = ({dateDisplay, onPrev, onNext}) => {
    return (
        <nav className="page__nav">
            <button
                className="page__nav-button page__prev-day"
                title="Go to previous day"
                onClick={onPrev}
            />
            <h2 className="page__date">{dateDisplay}</h2>
            <button
                className="page__nav-button page__next-day"
                title="Go to next day"
                onClick={onNext}
            />
        </nav>
    );
};

class Page extends PureComponent {
    _handleSelectEvent(selectedEventId) {
        this.props.dispatch(setSelectedEventId(selectedEventId));
    }

    _handleEventDetailOverlayClose() {
        this.props.dispatch(setSelectedEventId(undefined));
    }

    _handlePrev() {
        this.props.dispatch(setDay(this.props.day - MILLISECONDS_DAY));
    }

    _handleNext() {
        this.props.dispatch(setDay(this.props.day + MILLISECONDS_DAY));
    }

    render() {
        let {events, day, selectedEventId} = this.props;
        let filteredEvents = filterEventsByDay(events, day);
        let selectedEvent = getEventFromEvents(events, selectedEventId);
        let eventDetailOverlay;

        if (selectedEvent) {
            eventDetailOverlay = (
                <EventDetailOverlay
                    event={selectedEvent}
                    onClose={this._handleEventDetailOverlayClose.bind(this)}
                />
            );
        }

        return (
            <div className="page">
                <header className="page__header">
                    <h1 className="page__title">Daily Agenda</h1>
                </header>
                <DayNavigator
                    dateDisplay={getDisplayDate(day)}
                    onPrev={this._handlePrev.bind(this)}
                    onNext={this._handleNext.bind(this)}
                />
                <Calendar events={filteredEvents} onSelectEvent={this._handleSelectEvent.bind(this)} />
                {eventDetailOverlay}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    events: state.events,
    day: state.day,
    selectedEventId: state.selectedEventId,
});

export default connect(mapStateToProps)(Page);
