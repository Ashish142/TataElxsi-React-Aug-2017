import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import spinnerActionCreators from '../actions';

let Spinner = ({ value, up, down }) => (
	<div>
		<input type="button" value="Decrement" onClick={() => down()}/>
		<div>{value}</div>
		<input type="button" value="Increment" onClick={() => up()}/>
	</div>
);

function mapSpinnerStateToProps(state){
	return {
		value : state.counter
	}
}

function mapSpinnerActionsToProps(dispatch){
	var spinnerActions = bindActionCreators(spinnerActionCreators, dispatch);
	return spinnerActions;
}

export default connect(mapSpinnerStateToProps, mapSpinnerActionsToProps)(Spinner);