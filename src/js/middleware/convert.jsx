import _ from 'lodash'

export const textToArray = store => next => action => {
	if (action.type === 'CHANGE_TEXT') {
		action.text = _.pull(action.text.split(/\r\n|\r|\n/),'');
	}
	next(action);
};

export const test = store => next => action => {
	if (action.type === 'CHANGE_FONT_SIZE') {
		console.log(action.fontSize >= action.lineHeight);
	}
	next(action);
}