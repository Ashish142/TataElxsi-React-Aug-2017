import bugService from '../services/bugService';
function addNew(bugName){
		return (dispatch) => {
			bugService
				.createNew(bugName)
				.then(newBug => dispatch({
					type : 'ADD_NEW',
					payload : newBug
				}));
		}
		
	}
export default addNew;