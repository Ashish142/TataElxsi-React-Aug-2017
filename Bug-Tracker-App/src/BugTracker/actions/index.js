let bugActionCreators = {
	addNew(bugName){
		return {
			type : 'ADD_NEW',
			payload : bugName
		};
	},
	toggle(bug){
		return {
			type : 'TOGGLE',
			payload : bug
		}
	},
	removeClosed(){
		return {
			type : 'REMOVE_CLOSED'
		}
	},
	sort(sort_attribute){
		return { 
			type : 'SORT', 
			payload : sort_attribute
		};
	}
};
export default bugActionCreators;