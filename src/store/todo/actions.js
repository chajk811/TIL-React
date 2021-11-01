import { INSERT, REMOVE, TOGGLE } from './type';

let id = 1;

export const insert = text => {
	return {
		type: INSERT,
		payload: {
			id: id++,
			text: text,
			done: false,
		},
	};
};

// Use createAction
// import { createAction } from 'redux-action';
// export const insert = createAction(INSERT, text => ({
// 	id: id++,
// 	text: text,
// 	done: false,
// }));

export const remove = id => {
	return {
		type: REMOVE,
		payload: id,
	};
};

export const toggle = id => {
	return {
		type: TOGGLE,
		payload: id,
	};
};
