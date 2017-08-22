import React, { Component } from 'react';

class BugItem extends Component{
	render(){
		let { bug, toggle } = this.props;
		let classNames = bug.isClosed ? 'bugname closed' : 'bugname'; 
		return (
			<li>
				<span className={classNames} onClick={() => toggle(bug)}>{bug.name}</span>
				<div className="datetime">[{bug.createdAt.toString()}]</div>
				<div><b>[ {bug.isClosed.toString()} ]</b></div>
			</li>
		)
	}
}
export default BugItem;