//function getBugActionCreators(dispatch){
let bugActionCreators = {
	load(){
		return (dispatch, getState) => {
			fetch('http://localhost:3030/bugs')
				.then(response => response.json())
				.then(bugs => {
					dispatch({
						type : 'LOADED',
						payload : bugs
					});
				});
			};
	},
	addNew(bugName){
		return (dispatch) => {
			let newBug = {
				id : 0,
				name : bugName,
				isClosed : false,
				createdAt : new Date()
			};
			fetch('http://localhost:3030/bugs', {
				method : 'POST',
				body : JSON.stringify(newBug),
				headers : {
					'content-type' : 'application/json'
				}
			})
			.then(response => response.json())
			.then(newBug => dispatch({
				type : 'ADD_NEW',
				payload : newBug
			}));
		}
		
	},
	toggle(bug){
		return (dispatch) => {
			let toggledBug = {...bug, isClosed : !bug.isClosed};
			fetch(`http://localhost:3030/bugs/${bug.id}`, {
				method : 'PUT',
				body : JSON.stringify(toggledBug),
				headers : {
					'content-type' : 'application/json'
				}
			})
			.then(response => response.json())
			.then(bug => dispatch({
				type : 'TOGGLE',
				payload : bug
			}));
		}
	},
	removeClosed(){
		return (dispatch, getState) => {
			let bugs = getState().bugs,
				closedBugs = bugs.filter(bug => bug.isClosed);
			for(let index=0; index < closedBugs.length; index++){
				fetch(`http://localhost:3030/bugs/${closedBugs[index].id}`, {
					method : 'DELETE',
					headers : {
						'content-type' : 'application/json'
					}
				})
				.then(response => dispatch({
					type : 'REMOVE',
					payload : closedBugs[index]
				}));
			}
		}
	},
	sort(sort_attribute){
		return (dispatch) => {
			dispatch({ 
				type : 'SORT', 
				payload : sort_attribute
			});
		}
	}
};
//return bugActionCreators;
//}
export default bugActionCreators;