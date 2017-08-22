import React from 'react';
import BugItem from './BugItem';

class BugList extends React.Component{
			
	render(){
		let bugItems = this.props.bugs.map((bug, index) => (
			<BugItem bug={bug} key={index} toggle={this.props.toggle}></BugItem>
		));
		return(
			<section className="list">
				<ol>
					{bugItems}
				</ol>
				<input type="button" value="Remove Closed" onClick={() => this.props.removeClosed()}/>
			</section>
		)
	}
}
export default BugList;