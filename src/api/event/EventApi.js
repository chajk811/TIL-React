import apiInstance from '../api-instance';

const getEvents = (perPage, page) => {
  return apiInstance.get('/events?_limit=' + perPage + '&page=' + page);
};

const getEvent = (id) => {
  return apiInstance.get(`/events/${id}`);
};

export { getEvent, getEvents };
