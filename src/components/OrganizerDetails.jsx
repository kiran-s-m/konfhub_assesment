import React from 'react';

function OrganizerDetails({organizer}) {
  return (
    <div className="organizer-details">
      <h2>Organizer Information</h2>
      <p><strong>Name:</strong> {organizer.organiser_name}</p>
      <p><strong>Phone:</strong> {organizer.organiser_dial_code} {organizer.organiser_phone}</p>
      <p><strong>Email:</strong> {organizer.organiser_email}</p>
      <p><strong>Website:</strong> <a href={organizer.organiser_website} target="_blank" rel="noopener noreferrer">{organizer.organiser_website}</a></p>
      {organizer.organiser_image_url && <img src={organizer.organiser_image_url} alt="Organizer" />}
      {organizer.organizer_twitter_url && (
        <p>
          Twitter: <a href={organizer.organizer_twitter_url} target="_blank" rel="noopener noreferrer">{organizer.organizer_twitter_url}</a>
        </p>
      )}
      {organizer.organizer_linkedin_url && (
        <p>
          LinkedIn: <a href={organizer.organizer_linkedin_url} target="_blank" rel="noopener noreferrer">{organizer.organizer_linkedin_url}</a>
        </p>
      )}
      {organizer.organizer_facebook_url && (
        <p>
          Facebook: <a href={organizer.organizer_facebook_url} target="_blank" rel="noopener noreferrer">{organizer.organizer_facebook_url}</a>
        </p>
      )}
      <div dangerouslySetInnerHTML={{ __html: organizer.organiser_info }}></div>
    </div>
  );
};

export default OrganizerDetails;
