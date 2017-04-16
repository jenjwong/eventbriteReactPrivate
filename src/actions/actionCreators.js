import {SET_SELECTED_EVENT_ID, ADD_EVENT, SET_DAY} from './actions';

export const setSelectedEventId = selectedEventId => ({
    type: SET_SELECTED_EVENT_ID, selectedEventId,
});

export const addEvent = event => ({
    type: ADD_EVENT, event,
});

export const setDay = day => ({
    type: SET_DAY, day,
});
