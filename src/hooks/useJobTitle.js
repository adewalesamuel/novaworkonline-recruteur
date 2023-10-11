import { useState } from 'react';
import { Services } from '../services';

export const useJobTitle = () => {
    const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [slug, setSlug] = useState('');
	const [description, setDescription] = useState('');
	const [icon_url, setIcon_url] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getJobTitle = (jobtitleId, signal) => {        
        return Services.JobTitleService.getById(jobtitleId, signal)
        .then(response => {
            fillJobTitle(response.jobtitle);
            setIsDisabled(false);
        });
    }

    const createJobTitle = signal => {
        const payload = {
            name,
		slug,
		description,
		icon_url,
		
        };

        return Services.JobTitleService.create(JSON.stringify(payload), signal);
    }
    const updateJobTitle = (jobtitleId, signal) => {
        const payload = {
            name,
		slug,
		description,
		icon_url,
		
        };

        return Services.JobTitleService.update(jobtitleId, JSON.stringify(payload), signal);
    }
    const deleteJobTitle = (jobtitleId, signal) => {
        return Services.JobTitleService.destroy(jobtitleId, signal);
    }
    const fillJobTitle = (jobtitle) => {
        setId(jobtitle.id);
        setName(jobtitle.name ?? '');
		setSlug(jobtitle.slug ?? '');
		setDescription(jobtitle.description ?? '');
		setIcon_url(jobtitle.icon_url ?? '');
		
    }
    const emptyJobTitle = () => {
        setId('');
        setName('');
		setSlug('');
		setDescription('');
		setIcon_url('');
		
    }

    return {
        id,
        name,
		slug,
		description,
		icon_url,
		
        errors,
        isDisabled,
        setName,
		setSlug,
		setDescription,
		setIcon_url,
		
        setId,
        setErrors,
        setIsDisabled,
        getJobTitle,
        createJobTitle,
        updateJobTitle,
        deleteJobTitle,
        fillJobTitle,
        emptyJobTitle
    };
}