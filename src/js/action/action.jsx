'use strict';

export const CHANGE_LINE_HEIGHT = 'CHANGE_LINE_HEIGHT'
export const CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE'
export const CHANGE_TEXT = 'CHANGE_TEXT'


let changingActionStatus = null;

export function eventTracking(fontSize, lineHeight) {

	if( changingActionStatus ) {
		clearTimeout( changingActionStatus ) ;
	}

	changingActionStatus = setTimeout(function () {
		ga('send', 'event', 'font-size', 'chenge', 'font-size', fontSize);
		ga('send', 'event', 'lineHeight', 'chenge', 'lineHeight', lineHeight);
		ga('send', 'event', 'fontSize-lineHeight', 'chenge', `${fontSize}-${lineHeight}`);
		changingActionStatus = null;
	},5000)

}

export function changeLineHeight (fontSize, lineHeight) {
	// console.log(lineHeight)
	return {
		type: CHANGE_LINE_HEIGHT,
		lineHeight
	}
}

export function changeFontSize (fontSize, lineHeight) {
	// console.log(fontSize)
	return {
		type: CHANGE_FONT_SIZE,
		fontSize,
		lineHeight
	}
}

export function changeTextArea(text) {
	console.log(text)
	return {
		type: CHANGE_TEXT,
		text
	}
}


export const CHANGE_FISRST = 'CHANGE_FISRST'
export function changeFirst(firstState) {
	return {
		type: CHANGE_FISRST,
		firstState
	}
}
