import React from 'react';
import { EventList, EventDetail } from '../../components/Event';
import { Route } from 'react-router-dom';
import './EventContainer.css';

const EventContainer = ({ history }) => {
	return (
		<div>
			<button onClick={() => history.goBack()}>뒤로 가기</button>
			<Route path="/event" component={EventList} exact />
			<Route path="/event/:id" component={EventDetail} />
		</div>
	);
};

export default EventContainer;
