import reducers from './index';
import mockData from '../utils/data';

test('reducer initilizes with correct state', () => {
    let state;
    state = reducers(undefined, {});
    expect(state.events[0].title).toEqual('Managed intangible strategy');
});
