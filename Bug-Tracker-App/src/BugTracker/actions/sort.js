function sort(sort_attribute){
		return (dispatch) => {
			dispatch({ 
				type : 'SORT', 
				payload : sort_attribute
			});
		}
	}
export default sort;