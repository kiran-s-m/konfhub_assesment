import React, { useState } from 'react';

function TicketSection({type, price}) {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div className="ticket-section">
      <h3>{type} Tickets</h3>
      <p>Price: {price} Rs</p>
      <div>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  );
};

export default TicketSection;
