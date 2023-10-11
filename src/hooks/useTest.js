import { useState } from 'react';
import { Services } from '../services';

export const useTest = () => {
    const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [slug, setSlug] = useState('');
	const [description, setDescription] = useState('');
	const [cotent, setCotent] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getTest = (testId, signal) => {        
        return Services.TestService.getById(testId, signal)
        .then(response => {
            fillTest(response.test);
            setIsDisabled(false);
        });
    }

    const createTest = signal => {
        const payload = {
            name,
		slug,
		description,
		cotent,
		
        };

        return Services.TestService.create(JSON.stringify(payload), signal);
    }
    const updateTest = (testId, signal) => {
        const payload = {
            name,
		slug,
		description,
		cotent,
		
        };

        return Services.TestService.update(testId, JSON.stringify(payload), signal);
    }
    const deleteTest = (testId, signal) => {
        return Services.TestService.destroy(testId, signal);
    }
    const fillTest = (test) => {
        setId(test.id);
        setName(test.name ?? '');
		setSlug(test.slug ?? '');
		setDescription(test.description ?? '');
		setCotent(test.cotent ?? '');
		
    }
    const emptyTest = () => {
        setId('');
        setName('');
		setSlug('');
		setDescription('');
		setCotent('');
		
    }

    return {
        id,
        name,
		slug,
		description,
		cotent,
		
        errors,
        isDisabled,
        setName,
		setSlug,
		setDescription,
		setCotent,
		
        setId,
        setErrors,
        setIsDisabled,
        getTest,
        createTest,
        updateTest,
        deleteTest,
        fillTest,
        emptyTest
    };
}