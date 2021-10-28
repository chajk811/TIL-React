import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../../store/counter/actions';
import { Counter } from '../../components/Counter';

const CounterContainer = ({ history }) => {
	const count = useSelector(state => state.counter).count;
	const dispatch = useDispatch();
	const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
	const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
	return (
		<div>
			<button onClick={() => history.goBack()}>뒤로 가기</button>
			<Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
		</div>
	);
};

export default CounterContainer;
