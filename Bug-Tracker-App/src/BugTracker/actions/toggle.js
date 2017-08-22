import bugService from '../services/bugService';
function toggle(bug){
		return (dispatch) => {
			bugService
				.toggle(bug)
				.then(toggledBug => dispatch({
					type : 'TOGGLE',
					payload : toggledBug
				}));
		}
	}
export default toggle;