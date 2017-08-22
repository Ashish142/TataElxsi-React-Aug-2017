import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BugStats from './BugStats';
import BugSort from './BugSort';
import BugList from './BugList';
import BugEdit from './BugEdit';

import bugActionCreators from '../actions';

class BugTracker extends Component{
	componentWillMount(){
		console.log(this.props);
		this.props.load();
	}
	render(){
		let { model, toggle, addNew, sort, removeClosed } = this.props;
		return (
			<div>
				<BugStats bugs={model}></BugStats>
				<BugSort sort={sort}></BugSort>
				<BugEdit addNew={addNew}></BugEdit>
				<BugList bugs={model} removeClosed={removeClosed} toggle={toggle}></BugList>
			</div>
		)
	}
}


function mapBugStateToProps(state){
	return { model : state.bugs };
}

function mapBugActionsToProps(dispatch){
	return bindActionCreators(bugActionCreators, dispatch);
}

export default connect(mapBugStateToProps, mapBugActionsToProps)(BugTracker);