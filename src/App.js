import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarIcon from './konfhub/NavbarIcon';
import EventPoster from './konfhub/EventPoster';
import About from './konfhub/About';
import TicketSection from './konfhub/TicketSection';
import Footer from './konfhub/Footer';
import './App.css';

const App = () => {
  const [eventData, setEventData] = useState(null);
  const [showConsent, setShowConsent] = useState(false);
  const [selectedTicketType, setSelectedTicketType] = useState(null);
  const [tickets, setTickets] = useState({ free: 0, paid: 0, coupon: 0 });
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    axios.get('https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task')
      .then(response => {
        setEventData(response.data);
      })
      .catch(error => console.error('Error fetching event data:', error));
  }, []);

  const handleRegister = (ticketType) => {
    if (!consentGiven) {
      setSelectedTicketType(ticketType);
      setShowConsent(true);
    } else {
      setTickets(prev => ({ ...prev, [ticketType]: prev[ticketType] + 1 }));
    }
  };

  const handleConsentAccept = () => {
    setConsentGiven(true);
    if (selectedTicketType) {
      setTickets(prev => ({ ...prev, [selectedTicketType]: prev[selectedTicketType] + 1 }));
    }
    setShowConsent(false);
  };

  const handleIncreaseTickets = (type) => setTickets(prev => ({ ...prev, [type]: prev[type] + 1 }));
  const handleDecreaseTickets = (type) => {
    setTickets(prev => {
      const updatedTickets = { ...prev, [type]: Math.max(prev[type] - 1, 0) };
      if (updatedTickets.free === 0 && updatedTickets.paid === 0 && updatedTickets.coupon === 0) {
        setConsentGiven(false); // Reset consent if all tickets are removed
      }
      return updatedTickets;
    });
  };

  const handleCheckout = () => {
    window.location.reload(); // Reload the app on checkout
  };

  if (!eventData) return <div>Loading...</div>;

  return (
    <div className="app">
      <NavbarIcon iconUrl={eventData.navbar_icon} />
      <EventPoster posterUrl={eventData.event_poster_url} />
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#tickets">Tickets</a>
      </div>
      <section id="about">
        <About description={eventData.description} />
      </section>
      <section id="tickets">
        <TicketSection
          handleRegister={handleRegister}
          tickets={tickets}
          handleIncreaseTickets={handleIncreaseTickets}
          handleDecreaseTickets={handleDecreaseTickets}
          handleCheckout={handleCheckout}
        />
      </section>
      {showConsent && (
        <div className="consent">
          <div dangerouslySetInnerHTML={{ __html: eventData.checkout_consent }} />
          <button onClick={handleConsentAccept}>Accept</button>
        </div>
      )}
      <Footer iconUrl="https://media.konfhub.com/konfhub-logo-purple.svg" />
    </div>
  );
};

export default App;
