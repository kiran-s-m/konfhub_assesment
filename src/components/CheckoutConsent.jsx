import React from 'react';

function CheckoutConsent({consent}) {
  return (
    <div className="checkout-consent">
      <h2>Checkout Consent</h2>
      <div dangerouslySetInnerHTML={{ __html: consent }}></div>
    </div>
  );
};

export default CheckoutConsent;
