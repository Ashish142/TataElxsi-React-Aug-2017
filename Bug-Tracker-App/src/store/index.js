import { combineReducers, createStore } from 'redux';

import bugsReducer from '../BugTracker/reducers';
import spinnerReducer from '../Spinner/reducers';

let appReducers = {
	bugs : bugsReducer,
	counter : spinnerReducer
};

let rootReducer = combineReducers(appReducers);

let store = createStore(rootReducer);

export default store;