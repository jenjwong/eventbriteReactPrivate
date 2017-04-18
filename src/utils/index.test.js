import {
    dateAtMidnight,
    filterEventsByDay,
    filterEventsByHour,
    getDisplayDate,
    getDisplayHour,
    getEventFromEvents,
    isEventPassed
} from './index';
import {MILLISECONDS_SECOND, MILLISECONDS_DAY} from './constants';
import mockData from './data';

describe('dateAtMidnight should take timestamp and return Date object with time set to midnight', () => {
    const timestamp = 1492448301160;
    it('should return true for same day timestamps', () => {
      const timestampOneSecondAhead = 1492448301160 + MILLISECONDS_SECOND;
      expect(dateAtMidnight(timestamp) === dateAtMidnight(timestampOneSecondAhead)).toBeTruthy();
    });
    it('should return false for different day timestamps', () => {
        const timestampOneSecondAhead = 1492448301160 + MILLISECONDS_DAY;
        expect(dateAtMidnight(timestamp) === dateAtMidnight(timestampOneSecondAhead)).not.toBeTruthy();
    });
});

describe('filterEventsByDay should take a list of events and return a list filtered by day', () => {
    const data = mockData.slice(0, 5);
    it('should return array with length 1 when filtering by 1492448301160', () => {
        const oneDate = filterEventsByDay(data, 1492448301160);
        expect(oneDate.length).toEqual(1);
    });
    it('should return array with length 0 when filtering by timestamp not in list', () => {
        const noDates = filterEventsByDay(data, 1992448301160);
        expect(noDates.length).toEqual(0);
    });
});

describe('filterEventsByHour should take a list of events and return a list filtered by hour', () => {
    const data = mockData.slice(0, 5);
    it('should return array with length one with correct title when filtering by hour 16', () => {
        const oneDate = filterEventsByHour(data, 16);
        expect(oneDate.length).toEqual(1);
        expect(oneDate[0].title).toEqual('Managed intangible strategy');
    });
    it('should return empty array when filtering by hour 1', () => {
        const noDates = filterEventsByDay(data, 1);
        expect(noDates.length).toEqual(0);
    });
});

test('getDisplayDate should take timestamp and return formatted date string (Monday, April 17, 2017)', () => {
    const timestamp = 1492448301160;
    const dateString = 'Monday, April 17, 2017';
    expect(getDisplayDate(timestamp) === 'Monday, April 17, 2017').toBeTruthy();
});

describe('given an hour number, returns a display string version', () => {
    const _HOUR_DISPLAY_MAP = [
        '12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM',
        '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM',
    ];
    for (let i = 0; i < 24; i++) {
        it(`${getDisplayHour(i)} should equal ${_HOUR_DISPLAY_MAP[i]}`, () => {
             expect(getDisplayHour(i) === _HOUR_DISPLAY_MAP[i]).toBeTruthy();
        });
    }
});

describe('given a list of events, returns the event object whose id matches the specified eventId', () => {
    it('should return event with title Multi-channelled... when searching id 2 ', () => {
        const getEventId2 = getEventFromEvents(mockData, 2);
        expect(getEventId2.title).toEqual('Multi-channelled grid-enabled paradigm');
    });
    it('it should return undefined when searching for invalid id', () => {
        const getEventIdDoesNotExist = getEventFromEvents(mockData, 88);
        expect(getEventIdDoesNotExist).toEqual(undefined);
    });
});

describe('given a timestamp, returns a boolean indicating if the event has passed', () => {
    it('should return true for past event', () => {
        const passedEvent = isEventPassed(1491678028576);
        expect(passedEvent).toEqual(true);
    });
    it('should return false for future event', () => {
        const futureEvent = isEventPassed(1728000000000);
        expect(futureEvent).toEqual(false);
    });
});
