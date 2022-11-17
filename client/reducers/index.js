import { combineReducers } from 'redux';

import { ERReducer } from './ERReducer';

const reducers = combineReducers({
    ERs: ERReducer,
});

export default reducers;
