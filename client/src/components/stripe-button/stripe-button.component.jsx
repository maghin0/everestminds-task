import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51J5bYFDb358mW3DLGtVJvWIsc3UIeyehz6LPczT9Up3Q4JpGWiEYVvwtZhLKKcQIZZk6vh3iYOqQoGo7o66P60fQ00o458pQqz';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(response => {
        alert('payment successful!');
      })
      .catch(error => {
        console.log('payment error: ', JSON.parse(error));
        alert(
          'There was an issue with you payment, please use the provided test card'
        );
      });
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
