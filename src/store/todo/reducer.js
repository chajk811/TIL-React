import { INSERT, REMOVE, TOGGLE } from './type';

const initalState = {
	todos: [],
};

// Use handleActions
// import { handleActions } from 'redux-action';
// import produce from 'immer';

// const todoReducer = handleActions(
// 	{
// 		[INSERT]: (state, { payload: todo }) => {
// 			produce(state, draft => {
// 				draft.todos.push(todo);
// 			});
// 		},
// 		[REMOVE]: (state, { payload: id }) => {
// 			produce(state, draft => {
// 				const index = draft.todos.findIndex(todo => todo.id === id);
// 				draft.todos.splice(index, 1);
// 			});
// 		},
// 		[TOGGLE]: (state, { payload: id }) => {
// 			produce(state, draft => {
// 				const todo = draft.todos.find(todo => todo.id === id);
// 				todo.done = !todo.done;
// 			});
// 		},
// 	},
// 	initalState,
// );

const todoReducer = (state = initalState, action) => {
	switch (action.type) {
		case INSERT:
			return {
				...state,
				todos: state.todos.concat(action.paylod),
			};
		case REMOVE:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.paylod),
			};
		case TOGGLE:
			return {
				...state,
				todos: state.todos.map(todo => (todo.id === action.paylod ? { ...todo, done: !todo.done } : todo)),
			};
		default:
			return state;
	}
};

export default todoReducer;
