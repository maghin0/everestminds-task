import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51J5bYFDb358mW3DLGtVJvWIsc3UIeyehz6LPczT9Up3Q4JpGWiEYVvwtZhLKKcQIZZk6vh3iYOqQoGo7o66P60fQ00o458pQqz';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='yves saint laurent clothing inc.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/YRp.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
