import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {setDay} from '../actions/actionCreators';
import Calendar from './Calendar';
import AddEventButton from './AddEventButton';
import EventDetailOverlay from './EventDetailOverlay';
import {MILLISECONDS_DAY} from '../utils/constants';
import {filterEventsByDay, getEventFromEvents, getDisplayDate} from '../utils';

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

    static propTypes = {
        day: PropTypes.number.isRequired,
        events: PropTypes.arrayOf(PropTypes.object)
    }

    _handlePrev() {
        this.props.dispatch(setDay(this.props.day - MILLISECONDS_DAY));
    }

    _handleNext() {
        this.props.dispatch(setDay(this.props.day + MILLISECONDS_DAY));
    }

    _eventDetailOverlayRenderHelper() {
        return (
            <Route path="/details/:id"
                render={
                    ({match}) => {
                        const selectedEvent = getEventFromEvents(this.props.events, match.params.id);
                        return <EventDetailOverlay event={selectedEvent} {...this.props} />
                    }
                }
            />
        )
    }

    render() {
        let {events, day} = this.props;
        let filteredEvents = filterEventsByDay(events, day);

        return (
            <div className="page">
                <header className="page__header">
                    <h1 className="page__title">Daily Agenda</h1>
                    <span className="page__add-task-button">
                        <AddEventButton />
                    </span>
                </header>
                <DayNavigator
                    dateDisplay={getDisplayDate(day)}
                    onPrev={this._handlePrev.bind(this)}
                    onNext={this._handleNext.bind(this)}
                />
                <Calendar events={filteredEvents} />
                {this._eventDetailOverlayRenderHelper()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    events: state.events,
    day: state.day
});

export default connect(mapStateToProps)(Page);
