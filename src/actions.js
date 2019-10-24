import * as actions from './constants';

export const setSearchField = (text) => ({
	type: actions.SET_SEARCH_FIELD,
	payload: text
});