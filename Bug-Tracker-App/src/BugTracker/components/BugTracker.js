import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BugStats from './BugStats';
import BugSort from './BugSort';
import BugList from './BugList';
import BugEdit from './BugEdit';

import bugActionCreators from '../actions';

let BugTracker = ({ model, toggle, addNew, sort, removeClosed }) => (
	<div>
		<BugStats bugs={model}></BugStats>
		<BugSort sort={sort}></BugSort>
		<BugEdit addNew={addNew}></BugEdit>
		<BugList bugs={model} removeClosed={removeClosed} toggle={toggle}></BugList>
	</div>
);

function mapBugStateToProps(state){
	return { model : state.bugs };
}

function mapBugActionsToProps(dispatch){
	let bugActions = bindActionCreators(bugActionCreators, dispatch);
	return bugActions;
}

export default connect(mapBugStateToProps, mapBugActionsToProps)(BugTracker);