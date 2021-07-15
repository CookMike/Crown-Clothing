import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51JClF7LEz1KXviZMMX3KNtvP9kue5m9U8Oms5gzGifE0rAEQ2qi5pvCtvxIsjVdtWCKo3CoT2y0mAD2ECfaysEYz00ZwvfYhRg';

    const onToken= token =>{
        console.log(token);
        alert('Payment Succesful');
    }

    return(
    <StripeCheckout 
    label="Pay Now" 
    name='CRWN Clothing ltd.' 
    billingAddress 
    shippingAddress 
    image='https://svgshare.com/i/CUz.svg' 
    description={`Your value is $${price}`} 
    amount={priceForStripe} 
    panelLabel='Pay Now' 
    token={onToken}
    stripeKey={publishableKey}/>
    );
}

export default StripeCheckoutButton