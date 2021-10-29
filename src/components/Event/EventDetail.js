import React, { useEffect, useState } from 'react';
import { getEvent } from '../../api/event/EventApi';

const EventDetail = ({ match }) => {
	const id = match.params.id;
	const [event, setEvent] = useState('');

	useEffect(() => {
		getEvent(id)
			.then(response => {
				const { data } = response;
				setEvent(data);
			})
			.catch(error => console.log('error: ', error));
	}, [id]);

	return (
		event && (
			<div>
				<h1>{event.title}</h1>
				<p>
					{event.time} on {event.data} @ {event.location}
				</p>
				<p>{event.description}</p>
			</div>
		)
	);
};

export default EventDetail;
