function getComparerFor(attrName){
	return function(item1, item2){
		if (item1[attrName] < item2[attrName]) return -1;
		if (item1[attrName] > item2[attrName]) return 1;
		return 0;
	}
}

//Reducers
function bugsReducer(currentState = [], action){
	if (action.type === 'LOADED'){
		return action.payload;
	}
	if (action.type === 'ADD_NEW'){
		return [...currentState, action.payload];
	}
	if (action.type === 'TOGGLE'){
		let toggledBug = action.payload;
		return currentState.map(bug => bug.id === toggledBug.id ? toggledBug : bug);
	}
	if (action.type === 'REMOVE'){
		return currentState.filter(bug => bug.id !== action.payload.id);
	}
	if (action.type === 'SORT'){
		let comparer = getComparerFor(action.payload);
		currentState.sort(comparer);
		return [...currentState];
	}
	return currentState;
}

export default bugsReducer;
