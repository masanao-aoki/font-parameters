'use strict';

export const CHANGE_FISRST = 'CHANGE_FISRST'
export function changeFirst(firstState) {
	return {
		type: CHANGE_FISRST,
		firstState
	}
}
