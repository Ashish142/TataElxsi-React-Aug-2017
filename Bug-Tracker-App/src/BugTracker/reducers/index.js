function getComparerFor(attrName){
	return function(item1, item2){
		if (item1[attrName] < item2[attrName]) return -1;
		if (item1[attrName] > item2[attrName]) return 1;
		return 0;
	}
}

//Reducers
function bugsReducer(currentState = [], action){
	if (action.type === 'ADD_NEW'){
		let newBug = {
			name : action.payload,
			isClosed : false,
			createdAt : new Date()
		};
		return [...currentState, newBug];
	}
	if (action.type === 'TOGGLE'){
		let bugToToggle = action.payload,
			toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
		return currentState.map(bug => bug === bugToToggle ? toggledBug : bug);
	}
	if (action.type === 'REMOVE_CLOSED'){
		return currentState.filter(bug => !bug.isClosed);
	}
	if (action.type === 'SORT'){
		let comparer = getComparerFor(action.payload);
		currentState.sort(comparer);
		return [...currentState];
	}
	return currentState;
}

export default bugsReducer;
