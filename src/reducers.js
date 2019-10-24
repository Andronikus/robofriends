import * as actions from './constants';

// initial state
const initialState = {
	searchField: ''
}

// reducer
export const searchRobots = (state=initialState, action={}) => {
	switch(state){
		case: actions.SET_SEARCH_FIELD:
			return {...state, searchField: action.payload};
		default:
			return state;
	}
}