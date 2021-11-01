import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import qs from 'qs';
import { getEvents } from '../../api/event/EventApi';
import EventCard from './EventCard';
import './EventList.css';

const EventList = ({ location }) => {
	const queryData = qs.parse(location.search, { ignoreQueryPrefix: true });
	const perPage = 2;
	const page = parseInt(queryData.page) || 1;
	const [events, setEvents] = useState([]);
	const [totalEvents, setTotalEvents] = useState(0);

	// check total Page
	const hasNextPage = () => {
		const totalPage = Math.ceil(totalEvents / 2);
		return page < totalPage;
	};

	useEffect(() => {
		setEvents([]);
		getEvents(perPage, page)
			.then(response => {
				const { data } = response;
				setEvents(data);
				setTotalEvents(response.headers['x-total-count']);
			})
			.catch(error => console.log('error: ', error));
	}, [page]);

	return (
		<div className="events">
			<h1>Events for Good</h1>
			{events.map((event, index) => (
				<Link to={`/event/${event.id}`} className="event-link" key={index}>
					<EventCard event={event} />
				</Link>
			))}

			<div className="pagination">
				{page !== 1 && (
					<Link to={`/event?_limit=${perPage}&page=${page - 1}`} id="page-prev" rel="prev">
						&#60; Previous
					</Link>
				)}
				{hasNextPage() && (
					<Link to={`/event?_limit=${perPage}&page=${page + 1}`} id="page-next" rel="next">
						Next &#62;
					</Link>
				)}
			</div>
		</div>
	);
};

export default EventList;
