import React from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
	return (
		<div className="event-card">
			<span>
				@ {event.tiem} on {event.date}
			</span>
			<h4>{event.title}</h4>
		</div>
	);
};

export default EventCard;
