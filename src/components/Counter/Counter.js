import React from 'react';

const Counter = ({ count, onIncrease, onDecrease }) => {
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={onIncrease}>+</button>
			<button onClick={onDecrease}>-</button>
		</div>
	);
};

export default Counter;
