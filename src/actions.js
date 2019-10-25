import * as actions from './constants';

export const setSearchField = (text) => (
	{
		type: actions.SET_SEARCH_FIELD,
		payload: text
	}
);

export const requestRobots = () => (dispatch) => {
	dispatch({type: actions.REQUEST_ROBOTS_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => dispatch({type: actions.REQUEST_ROBOTS_SUCCESS, payload: users}))
        .catch(error => dispatch({type: actions.REQUEST_ROBOTS_FAILED, payload: error}))
}