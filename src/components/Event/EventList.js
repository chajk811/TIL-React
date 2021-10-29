import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import qs from 'qs';
import { getEvents } from '../../api/event/EventApi';
import EventCard from './EventCard';
import './EventList.css';

const EventList = ({ location }) => {
	const queryData = qs.parse(location.search, { ignoreQueryPrefix: true });
	const perPage = 2;
	const page = parseInt(queryData.page);
	const [events, setEvents] = useState([]);

	useEffect(() => {
		getEvents(perPage, page)
			.then(response => {
				const { data } = response;
				setEvents(data);
			})
			.catch(error => console.log('error: ', error));
	}, []);

	return (
		<div className="events">
			<h1>Events for Good</h1>
			{events.map((event, index) => (
				<Link to={`/event/${event.id}`} className="event-link" key={index}>
					<EventCard event={event} />
				</Link>
			))}
		</div>
	);
};

export default EventList;
