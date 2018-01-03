import test from 'ava';
import { changeFirst, changeFontSize, changeLineHeight, changeTextArea, eventTracking } from '../src/js/action/action';


test('test', t => {
	t.is(changeFirst(1).firstState,1)
});
