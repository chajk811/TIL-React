import { INSERT, REMOVE, TOGGLE } from './type';

const initalState = {
	todos: [],
};

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

// TODO
// 1. Use handleActions

export default todoReducer;
