import { createStore, compose } from 'redux';
import reducer from './reducers';

if (process.env.NODE_ENV === 'development') {
    var store = createStore(reducer, compose(
        typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f,
    ));
} else {
    var store = createStore(reducer);
}

export default store;
