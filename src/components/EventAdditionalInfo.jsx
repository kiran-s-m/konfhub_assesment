import React from 'react';

function EventAdditionalInfo({event}) {
  return (
    <div className="event-additional-info">
      <h2>Event Information</h2>
      <p><strong>Event ID:</strong> {event.event_id}</p>
      <p><strong>Short Name:</strong> {event.event_short_name}</p>
      <p><strong>Venue:</strong> {event.venue || 'Virtual Event'}</p>
      <p><strong>Additional Venue Details:</strong> {event.additional_venue_details || 'N/A'}</p>
      <p><strong>Latitude:</strong> {event.latitude || 'N/A'}</p>
      <p><strong>Longitude:</strong> {event.longitude || 'N/A'}</p>
      <p><strong>City:</strong> {event.city || 'N/A'}</p>
      <p><strong>State:</strong> {event.state || 'N/A'}</p>
      <p><strong>Country:</strong> {event.country || 'N/A'}</p>
      <p><strong>Expected Speakers:</strong> {event.expected_speakers || 'N/A'}</p>
      <p><strong>Keywords:</strong> {event.keywords.join(', ') || 'N/A'}</p>
      <p><strong>Event Live Link:</strong> <a href={event.event_live_link} target="_blank" rel="noopener noreferrer">Join Event</a></p>
      <p><strong>Tax Percentage:</strong> {event.tax_percentage}%</p>
      <p><strong>Non-INR Payment Gateway Percentage:</strong> {event.non_inr_pg_percentage}%</p>
      <p><strong>Currency Name:</strong> {event.currency_name}</p>
      <p><strong>Tax Name:</strong> {event.tax_name}</p>
      <p><strong>Tax Consent:</strong> {event.tax_consent}</p>
      <p><strong>Payment Methods:</strong> {event.allowed_payment_methods.join(', ')}</p>
    </div>
  );
};

export default EventAdditionalInfo;
