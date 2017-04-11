'use strict';


export const CHANGE_LINE_HEIGHT = 'CHANGE_LINE_HEIGHT'
export const CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE'


export function changeLineHeight (lineHeight) {
	console.log(lineHeight)
	return {
		type: CHANGE_LINE_HEIGHT,
		lineHeight
	}
}

export function changeFontSize (fontSize) {
	console.log(fontSize)
	return {
		type: CHANGE_FONT_SIZE,
		fontSize
	}
}


export const CHANGE_FISRST = 'CHANGE_FISRST'
export function changeFirst(firstState) {
	return {
		type: CHANGE_FISRST,
		firstState
	}
}
