import bugService from '../services/bugService';
function removeClosed(){
		return (dispatch, getState) => {
			let bugs = getState().bugs,
				closedBugs = bugs.filter(bug => bug.isClosed);
			for(let index=0; index < closedBugs.length; index++){
				bugService
					.remove(closedBugs[index])
					.then(response => dispatch({
						type : 'REMOVE',
						payload : closedBugs[index]
					}));
			}
		}
	}
export default removeClosed;