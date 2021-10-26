import React, { useEffect, useState } from 'react';
import { getEvents } from '../../api/event/EventApi';
import EventCard from './EventCard';
import './EventList.css';

const EventList = () => {
  const perPage = 2;
  const page = 1;
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents(perPage, page)
      .then((response) => {
        const { data } = response;
        setEvents(data);
      })
      .catch((error) => console.log('error: ', error));
  }, []);

  return (
    <div className="events">
      <h1>Events for Good</h1>
      {events.map((event, index) => (
        <EventCard event={event} key={index} />
      ))}
    </div>
  );
};

export default EventList;
