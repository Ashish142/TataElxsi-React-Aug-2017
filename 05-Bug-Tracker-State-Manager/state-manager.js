var sm = (function(){
	var _reducer, 
		_state,
		init_action = { type : '@@INIT_ACTION' },
		_callbacks = [];

	function getState(){
		return _state;
	}

	function subscribe(callback){
		if (typeof callback === 'function')
			_callbacks.push(callback);
	}

	function trigger(){
		_callbacks.forEach(callback => callback());
	}

	function dispatch(action){
		var newState = _reducer(_state, action);
		if (newState !== _state){
			_state = newState;
			trigger();
		}
	}
	function createStore(reducer){
		_reducer = reducer;
		_state = _reducer(_state, init_action);
		return {
			getState : getState,
			subscribe : subscribe,
			dispatch : dispatch
		};
	}

	function bindActionCreators(actions, dispatch){
		let result = {};
		for(let key in actions){
			result[key] = function(){
				dispatch(actions[key].apply(this, arguments))
			}
		}
		return result;
	}

	return {
		createStore : createStore,
		bindActionCreators : bindActionCreators
	};
})();
