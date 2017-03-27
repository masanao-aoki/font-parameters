'use strict';

const initialState = {
	firstState: 'first-State',
}

export default function home(state = initialState, action) {
	switch (action.type) {
		case 'CHANGE_FISRST': {
			return Object.assign({}, state, {
				content: action.firstState
			});
		}
		default:
			return state
	}
}
