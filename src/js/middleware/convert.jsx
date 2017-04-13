export const textToArray = store => next => action => {
	if (action.type === 'CHANGE_TEXT') {
		action.text = action.text.split(/\r\n|\r|\n/);
	}
	next(action);
};
