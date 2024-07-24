import React from 'react';
import TicketSection from './TicketSection';

function Tickets() {
  return (
    <div className="tickets">
      <h2>Tickets</h2>
      <TicketSection type="Free" price={0} />
      <TicketSection type="Paid" price={1000} />
      <TicketSection type="Coupon" price={1000} />
    </div>
  );
};

export default Tickets;
