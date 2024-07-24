import React from 'react';

function About({ description }) {
  return (
    <div className="about">
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default About;
