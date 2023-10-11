import { useState } from 'react';
import { Services } from '../services';

export const useSubscriptionPack = () => {
    const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [slug, setSlug] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [duration, setDuration] = useState('');
	const [type, setType] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getSubscriptionPack = (subscriptionpackId, signal) => {        
        return Services.SubscriptionPackService.getById(subscriptionpackId, signal)
        .then(response => {
            fillSubscriptionPack(response.subscriptionpack);
            setIsDisabled(false);
        });
    }

    const createSubscriptionPack = signal => {
        const payload = {
            name,
		slug,
		description,
		price,
		duration,
		type,
		
        };

        return Services.SubscriptionPackService.create(JSON.stringify(payload), signal);
    }
    const updateSubscriptionPack = (subscriptionpackId, signal) => {
        const payload = {
            name,
		slug,
		description,
		price,
		duration,
		type,
		
        };

        return Services.SubscriptionPackService.update(subscriptionpackId, JSON.stringify(payload), signal);
    }
    const deleteSubscriptionPack = (subscriptionpackId, signal) => {
        return Services.SubscriptionPackService.destroy(subscriptionpackId, signal);
    }
    const fillSubscriptionPack = (subscriptionpack) => {
        setId(subscriptionpack.id);
        setName(subscriptionpack.name ?? '');
		setSlug(subscriptionpack.slug ?? '');
		setDescription(subscriptionpack.description ?? '');
		setPrice(subscriptionpack.price ?? '');
		setDuration(subscriptionpack.duration ?? '');
		setType(subscriptionpack.type ?? '');
		
    }
    const emptySubscriptionPack = () => {
        setId('');
        setName('');
		setSlug('');
		setDescription('');
		setPrice('');
		setDuration('');
		setType('');
		
    }

    return {
        id,
        name,
		slug,
		description,
		price,
		duration,
		type,
		
        errors,
        isDisabled,
        setName,
		setSlug,
		setDescription,
		setPrice,
		setDuration,
		setType,
		
        setId,
        setErrors,
        setIsDisabled,
        getSubscriptionPack,
        createSubscriptionPack,
        updateSubscriptionPack,
        deleteSubscriptionPack,
        fillSubscriptionPack,
        emptySubscriptionPack
    };
}