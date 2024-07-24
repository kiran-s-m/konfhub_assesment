import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import About from './About';
import Tickets from './Tickets';
import CheckoutConsent from './CheckoutConsent';
import './KonfHub.css';

const API_BASE_URL = 'https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task';

function Konfhub() {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(API_BASE_URL);
        setEvent(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching event: {error.message}</p>;

  return (
    <div className="konfhub">
      <Navbar iconSrc={event.navbar_icon} posterSrc={event.event_poster_url} />
      <div className="content">
        <About event={event} />
        <Tickets />
        <CheckoutConsent consent={event.checkout_consent} />
      </div>
    </div>
  );
};

export default Konfhub;
