import React from 'react';

function Navbar({iconSrc, posterSrc}) {
  return (
    <div className="navbar">
      <img src={iconSrc} alt="Navbar Icon" style={{ maxHeight: '50px' }} />
      <img src={posterSrc} alt="Event Poster" style={{ maxWidth: '100%' }} />
    </div>
  );
};

export default Navbar;
