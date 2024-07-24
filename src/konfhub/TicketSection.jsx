import React from 'react';
import './TicketSection.css';

function TicketSection({
  handleRegister,
  tickets,
  handleIncreaseTickets,
  handleDecreaseTickets,
  handleCheckout
}) {
  const freeTicketPrice = 0;
  const paidTicketPrice = 1000;
  const couponTicketPrice = 1000;

  const totalPrice = (tickets.free * freeTicketPrice) + (tickets.paid * paidTicketPrice) + (tickets.coupon * couponTicketPrice);

  return (
    <div className="ticket-section">
      <div className="ticket">
        <h3>Free Ticket</h3>
        <p>This is a ticket description. This is a free ticket. This ticket is uncategorised.</p>
        <p>KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India</p>
        <p>This is additional venue details.</p>
        <p>Available Till: 31st Aug 2034, 06:00 PM IST</p>
        <p>FREE</p>
        {tickets.free === 0 ? (
          <button className="register-btn" onClick={() => handleRegister('free')}>Register</button>
        ) : (
          <div className="ticket-counter">
            <button onClick={() => handleDecreaseTickets('free')}>-</button>
            <span>{tickets.free}</span>
            <button onClick={() => handleIncreaseTickets('free')}>+</button>
          </div>
        )}
      </div>
      <div className="ticket">
        <h3>Paid Ticket</h3>
        <p>This is a ticket description. This is a paid ticket. This ticket is uncategorised.</p>
        <p>KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India</p>
        <p>This is additional venue details.</p>
        <p>Available Till: 31st Aug 2034, 06:00 PM IST</p>
        <p>₹1000</p>
        {tickets.paid === 0 ? (
          <button className="register-btn" onClick={() => handleRegister('paid')}>Register</button>
        ) : (
          <div className="ticket-counter">
            <button onClick={() => handleDecreaseTickets('paid')}>-</button>
            <span>{tickets.paid}</span>
            <button onClick={() => handleIncreaseTickets('paid')}>+</button>
          </div>
        )}
      </div>
      <div className="ticket">
        <h3>Coupon Ticket</h3>
        <p>This is a ticket description. This is a coupon ticket. This ticket is uncategorised.</p>
        <p>KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India</p>
        <p>This is additional venue details.</p>
        <p>Available Till: 31st Aug 2034, 06:00 PM IST</p>
        <p>₹1000</p>
        {tickets.coupon === 0 ? (
          <button className="register-btn" onClick={() => handleRegister('coupon')}>Register</button>
        ) : (
          <div className="ticket-counter">
            <button onClick={() => handleDecreaseTickets('coupon')}>-</button>
            <span>{tickets.coupon}</span>
            <button onClick={() => handleIncreaseTickets('coupon')}>+</button>
          </div>
        )}
      </div>
      <div className="total-price">
        <h2>Total Price: ₹{totalPrice}</h2>
        <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default TicketSection;
