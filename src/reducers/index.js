import DATA_SET from '../utils/data';
import {ADD_EVENT, SET_SELECTED_EVENT_ID, SET_DAY} from '../actions/actions';

const DEFAULT_STATE = {
    events: DATA_SET,
    day: Date.now(),
    selectedEventId: undefined,
};

const event = (state, action) => {
    switch (action.type) {
        case ADD_EVENT:
            return {
                id: action.id,
                title: action.title,
                description: action.description,
                start: action.start,
                hours: action.hours,
                color: action.color
            }
        default:
            return state
    }
};

const events = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ADD_EVENT:
            return [
                ...state,
                event(undefined, action)
            ]
        case SET_SELECTED_EVENT_ID:
            return {
                ...state,
                selectedEventId: action.selectedEventId
            }
        case SET_DAY:
            return {
                ...state,
                day: action.day
          }
        default:
            return state
    }
};

export default events;
