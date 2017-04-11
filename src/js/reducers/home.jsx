'use strict';

const initialState = {
	text: ['テキストテキストテキストテキストテキスト'],
	firstState: 'first-State',
	lineHeight: 14,
	fontSize: 14,
}

export default function home(state = initialState, action) {
	switch (action.type) {
		case 'CHANGE_LINE_HEIGHT': {
			return Object.assign({}, state, {
				lineHeight: action.lineHeight
			});
		}
		case 'CHANGE_FONT_SIZE': {
			return Object.assign({}, state, {
				fontSize: action.fontSize
			});
		}
		case 'CHANGE_FISRST': {
			return Object.assign({}, state, {
				content: action.firstState
			});
		}
		default:
			return state
	}
}
