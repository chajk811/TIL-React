import React, { useEffect, useState } from 'react';
import { getEvents } from '../../api/event/EventApi';
import './EventContainer.css';

const EventContainer = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // api test
    getEvents(2, 1)
      .then((response) => {
        const { data } = response;
        setEvents(data);
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }, []);

  return (
    <div>
      <h1>EventContainer init</h1>
      {events.map((event, index) => (
        <div key={index}>
          <p>{event.title}</p>
        </div>
      ))}
    </div>
  );
};

export default EventContainer;
