# calendar-exercise

### New Technologies
* React-Router 4
* React-Redux
* Redux
* Redux-Thunks
* Enzyme
* Google Caja Sanitizer

●  [CSS] Entire page background needs a gradient from white (top) to light gray (bottom)<br>
[Updated Page.css](https://github.com/jenjwong/calendar-exercise/blob/saving-the-day/src/components/Page.css)					
							 								
●  [CSS] Add rounded corners<br>
[Creates rounded corner utility function (r-c-5) in Index.css](https://github.com/jenjwong/calendar-exercise/blob/saving-the-day/src/index.css)	
					 								
●  [CSS] Event color indicator in overlay (small square next to the time time) should match the event color <br>
[Refactored the colors to be declared once in utility css](https://github.com/jenjwong/calendar-exercise/blob/saving-the-day/src/index.css)<br>	
[Colors are passed as props and added as part of class name using string-literals](https://github.com/jenjwong/calendar-exercise/blob/saving-the-day/src/components/EventDetails.js)						
							 								
●  [CSS] Remove double border at bottom of the 11PM timeslot<br>
[Set last-child selector to no border](https://github.com/jenjwong/calendar-exercise/blob/saving-the-day/src/components/TimeSlot.css)						
					
●  [JS/CSS] Past events should display faded out<br>
[Created utility function isEventPassed](https://github.com/jenjwong/calendar-exercise/blob/saving-the-day/src/utils/index.js)<br>		
[Created utility function to programatically customize CSS in TimeSlot.js](https://github.com/jenjwong/calendar-exercise/blob/saving-the-day/src/components/TimeSlot.js)	
							 								
●  [JS] Buttons to navigate to previous/next day do not work<br>
[Uses constant MILLISECONDS_DAY to change date](https://github.com/jenjwong/calendar-exercise/blob/saving-the-day/src/components/Page.js)<br>			
Day is defined in redux store and all filtering is done in reference to that value
							 								
●  [JS] Implement filtering by day, so that events only appear on their respective dates<br>
[Created helper function dateAtMidnight that setsHours on date object to midnight 
allowing equality comparison of timestamps](https://github.com/jenjwong/calendar-exercise/blob/saving-the-day/src/utils/index.js)								


●  [JS] Improve naively implemented getDisplayDate helper function<br>
[Uses toLocalString method of date object passing in options](https://github.com/jenjwong/calendar-exercise/blob/saving-the-day/src/utils/index.js)								

						 								
●  [JS] Improve naively implemented getDisplayHour helper function<br>
[Refactored original code for use in test!](https://github.com/jenjwong/calendar-exercise/blob/saving-the-day/src/utils/index.js)								
					

● Each time slot event should take up the full width and vertically stack on 
top of each other. On larger screens, when there are multiple events for a time slot, 
they should be evenly divided on the same row<br>
[Uses Flexbox](https://github.com/jenjwong/calendar-exercise/blob/saving-the-day/src/components/TimeSlot.css)								
							 							
								
Bonus!
							
						 													 								
●  [JS] Unit test for helper utilities and/or components
This project uses [Jest](https://facebook.github.io/jest/) with [Enzyme](https://github.com/airbnb/enzyme). Enzyme allows shallow rendering of components, making it easy to isolate tests. Shallow rendering in Enzyme renders components one level deep so a component can be tested in isolation of its child components.

To execute the test suite run:
```
npm run test
```

Static components are tested using Jest Snapshots. Snapshot tests render HTML markup and compare the current version to the previous version. The first time you add a Snapshot test create a baseline for comparison by running:

```
npm run test-update
```

For self-documenting code, tests are placed in the directory alongside the file it is testing with the naming convention ComponentName.test.js.

To generate an Istanbul code coverage report run:
```
npm run coverage
```
	
●  [JS] Use Redux/MobX/etc to store application state<br>
[Application state logic is managed with Redux](https://github.com/jenjwong/calendar-exercise/blob/saving-the-day/src/reducers/index.js)								
Redux Dev tools run in development. Normalizr would be useful on a bigger project along with storing data as a dictionary with array lookups instead of an array of event objects	
							 								
●  [JS] Use a routing library (like React Router) to provide sharable URLs<br>
Presentational state is abstracted out of the Redux store and EventDetailsOverlay display is managed with React Router. Subroutes are defined in Page.js:
[Updated Page.css](https://github.com/jenjwong/calendar-exercise/blob/saving-the-day/src/components/Page.css)					
			
●  [HTML/CSS/JS] Create a form for adding a new calendar event<br>
[AddEventForm.js allows users to create events, updating the Redux state](	https://github.com/jenjwong/calendar-exercise/blob/saving-the-day/src/components/AddEventForm.js). This feature is still in progress, but I thought it was worth including as it allows you to interact with the rest of the application. The feature has basic functionality like form validation, but is un-styled and the datepicker works only in Chrome and Safari. 					
									
			
