import {createStore, compose} from 'redux';
import reducer from './reducers';

let store;
if (process.env.NODE_ENV === 'development') {
    store = createStore(reducer, compose(
        typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f,
    ));
} else {
    store = createStore(reducer);
}

export default store;
