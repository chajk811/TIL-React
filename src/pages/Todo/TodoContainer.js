import React from 'react';

const TodoContainer = ({ history }) => {
	// use Redux
	return (
		<div>
			<button onClick={() => history.goBack()}>뒤로 가기</button>
			<h1>Todo component init</h1>
		</div>
	);
};

export default TodoContainer;
