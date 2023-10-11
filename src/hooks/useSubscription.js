import { useState } from 'react';
import { Services } from '../services';

export const useSubscription = () => {
    const [id, setId] = useState('');
	const [type, setType] = useState('');
	const [amount, setAmount] = useState('');
	const [payment_mode, setPayment_mode] = useState('');
	const [payment_status, setPayment_status] = useState('');
	const [expiration_date, setExpiration_date] = useState('');
	const [subscriber_id, setSubscriber_id] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getSubscription = (subscriptionId, signal) => {        
        return Services.SubscriptionService.getById(subscriptionId, signal)
        .then(response => {
            fillSubscription(response.subscription);
            setIsDisabled(false);
        });
    }

    const createSubscription = signal => {
        const payload = {
            type,
		amount,
		payment_mode,
		payment_status,
		expiration_date,
		subscriber_id,
		
        };

        return Services.SubscriptionService.create(JSON.stringify(payload), signal);
    }
    const updateSubscription = (subscriptionId, signal) => {
        const payload = {
            type,
		amount,
		payment_mode,
		payment_status,
		expiration_date,
		subscriber_id,
		
        };

        return Services.SubscriptionService.update(subscriptionId, JSON.stringify(payload), signal);
    }
    const deleteSubscription = (subscriptionId, signal) => {
        return Services.SubscriptionService.destroy(subscriptionId, signal);
    }
    const fillSubscription = (subscription) => {
        setId(subscription.id);
        setType(subscription.type ?? '');
		setAmount(subscription.amount ?? '');
		setPayment_mode(subscription.payment_mode ?? '');
		setPayment_status(subscription.payment_status ?? '');
		setExpiration_date(subscription.expiration_date ?? '');
		setSubscriber_id(subscription.subscriber_id ?? '');
		
    }
    const emptySubscription = () => {
        setId('');
        setType('');
		setAmount('');
		setPayment_mode('');
		setPayment_status('');
		setExpiration_date('');
		setSubscriber_id('');
		
    }

    return {
        id,
        type,
		amount,
		payment_mode,
		payment_status,
		expiration_date,
		subscriber_id,
		
        errors,
        isDisabled,
        setType,
		setAmount,
		setPayment_mode,
		setPayment_status,
		setExpiration_date,
		setSubscriber_id,
		
        setId,
        setErrors,
        setIsDisabled,
        getSubscription,
        createSubscription,
        updateSubscription,
        deleteSubscription,
        fillSubscription,
        emptySubscription
    };
}