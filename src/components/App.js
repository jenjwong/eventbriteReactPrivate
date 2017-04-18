import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Page from './Page';
import store from '../store';

const App = () => {
    return (
        <Router>
            <Provider store={store}>
                <div>
                    <Route  path="/" component={Page} />
                </div>
            </Provider>
        </Router>
    );
};

export default App;
