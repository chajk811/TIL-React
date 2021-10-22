import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../../store/counter/actions';
import { Counter } from '../../components/Counter';

const CounterContainer = () => {
  const count = useSelector((state) => state.counter).count;
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />;
};

export default CounterContainer;
