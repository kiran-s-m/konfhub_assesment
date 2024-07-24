import React from 'react';

function EventPoster({src}) {
  return src ? <img src={src} alt="Event Poster" style={{ maxWidth: '100%' }} /> : null;
};

export default EventPoster;
