let bugService = {
	getAll(){
		return fetch('http://localhost:3030/bugs')
			.then(response => response.json())
	},
	createNew(bugName){
		let newBug = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		return fetch('http://localhost:3030/bugs', {
			method : 'POST',
			body : JSON.stringify(newBug),
			headers : {
				'content-type' : 'application/json'
			}
		})
		.then(response => response.json())
	},
	toggle(bug){
		let toggledBug = {...bug, isClosed : !bug.isClosed};
		return fetch(`http://localhost:3030/bugs/${bug.id}`, {
			method : 'PUT',
			body : JSON.stringify(toggledBug),
			headers : {
				'content-type' : 'application/json'
			}
		})
		.then(response => response.json());
	},
	remove(bug){
		return fetch(`http://localhost:3030/bugs/${bug.id}`, {
			method : 'DELETE',
			headers : {
				'content-type' : 'application/json'
			}
		})
	}
}
export default bugService;