import bugService from '../services/bugService';
function load(){
		return (dispatch, getState) => {
			bugService
				.getAll()
				.then(bugs => {
					dispatch({
						type : 'LOADED',
						payload : bugs
					});
				});
			};
	}
export default load;