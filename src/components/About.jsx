import React from 'react';

function About({event}) {
  return (
    <div className="about">
      <h2>About</h2>
      <div dangerouslySetInnerHTML={{ __html: event.description }}></div>
    </div>
  );
};

export default About;
