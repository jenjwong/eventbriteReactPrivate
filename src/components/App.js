import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Page from './Page';
import AddEventForm from './AddEventForm';
import store from '../store';

export const App = () => {
    return (
        <Router>
            <Provider store={store}>
                <div>
                    <Route path="/" component={Page} />
                    <Route path="/addEvent" component={AddEventForm} />
                </div>
            </Provider>
        </Router>
    );
};
