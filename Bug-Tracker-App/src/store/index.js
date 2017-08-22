import { combineReducers, createStore, applyMiddleware} from 'redux';

import bugsReducer from '../BugTracker/reducers';
import spinnerReducer from '../Spinner/reducers';
import thunk from 'redux-thunk';

let appReducers = {
	bugs : bugsReducer,
	counter : spinnerReducer
};
function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

let rootReducer = combineReducers(appReducers);

let store = createStore(rootReducer, {}, applyMiddleware(logger, thunk));

export default store;