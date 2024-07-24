import React from 'react';
import './KonfHub.css';

function EventDetails({event}) {
  return (
    <div className="event-details">
      <h1>{event.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: event.description }}></div>
      <p><strong>Start Date:</strong> {event.start_date}</p>
      <p><strong>End Date:</strong> {event.end_date}</p>
      <p><strong>Start Time:</strong> {event.start_time}</p>
      <p><strong>End Time:</strong> {event.end_time}</p>
      <p><strong>Time Zone:</strong> {event.time_zone}</p>
      <p><strong>Is Virtual:</strong> {event.is_virtual ? 'Yes' : 'No'}</p>
      <p><strong>Expected Attendees:</strong> {event.expected_attendees}</p>
      <a href={event.event_website} target="_blank" rel="noopener noreferrer">Event Website</a>
    </div>
  );
};

export default EventDetails;
