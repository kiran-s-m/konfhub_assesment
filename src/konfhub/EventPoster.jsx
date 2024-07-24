import React from 'react';

function EventPoster({ posterUrl }) {
  return (
    <div className="event-poster">
      <img src={posterUrl} alt="Event Poster" />
    </div>
  );
};

export default EventPoster;
