import React, { useEffect, useState } from 'react';
import EventList from '../../components/Event/EventList';
import './EventContainer.css';

const EventContainer = ({ history }) => {
  return (
    <div>
      <button onClick={() => history.goBack()}>뒤로 가기</button>
      <EventList />
    </div>
  );
};

export default EventContainer;
