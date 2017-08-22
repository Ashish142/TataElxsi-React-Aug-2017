import React, { Component } from 'react';

class BugSort extends Component{
	onSortByChange(evt){
		let sort_attribute = evt.target.value;
		this.props.sort(sort_attribute);
	}
	render(){
		return(
			<section className="sort">
				<label htmlFor="">Order By :</label>
				<select onChange={this.onSortByChange.bind(this)}>
					<option value="name">Name</option>
					<option value="isClosed">Status</option>
					<option value="createdAt">Created</option>
				</select>
				<label htmlFor="">Descending ? :</label>
				<input type="checkbox" name="" id="" />
			</section>
		)
	}
}
export default BugSort;