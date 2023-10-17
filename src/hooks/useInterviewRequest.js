import { useState } from 'react';
import { Services } from '../services';

export const useInterviewRequest = () => {
    const [id, setId] = useState('');
	const [status, setStatus] = useState('');
	const [user_id, setUser_id] = useState('');
	const [slug, setSlug] = useState('');
	const [description, setDescription] = useState('');
	const [recruiter_id, setRecruiter_id] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getInterviewRequest = (interviewrequestId, signal) => {        
        return Services.InterviewRequestService.getById(interviewrequestId, signal)
        .then(response => {
            fillInterviewRequest(response.interviewrequest);
            setIsDisabled(false);
        });
    }

    const createInterviewRequest = signal => {
        const payload = {
            user_id,
            slug,
            description,
		
        };

        return Services.InterviewRequestService.create(JSON.stringify(payload), signal);
    }
    const updateInterviewRequest = (interviewrequestId, signal) => {
        const payload = {
		user_id,
		slug,
		description,
		
        };

        return Services.InterviewRequestService.update(interviewrequestId, JSON.stringify(payload), signal);
    }
    const deleteInterviewRequest = (interviewrequestId, signal) => {
        return Services.InterviewRequestService.destroy(interviewrequestId, signal);
    }
    const fillInterviewRequest = (interviewrequest) => {
        setId(interviewrequest.id);
        setStatus(interviewrequest.status ?? '');
		setUser_id(interviewrequest.user_id ?? '');
		setSlug(interviewrequest.slug ?? '');
		setDescription(interviewrequest.description ?? '');
		setRecruiter_id(interviewrequest.recruiter_id ?? '');
		
    }
    const emptyInterviewRequest = () => {
        setId('');
        setStatus('');
		setUser_id('');
		setSlug('');
		setDescription('');
		setRecruiter_id('');
		
    }

    return {
        id,
        status,
		user_id,
		slug,
		description,
		recruiter_id,
		
        errors,
        isDisabled,
        setStatus,
		setUser_id,
		setSlug,
		setDescription,
		setRecruiter_id,
		
        setId,
        setErrors,
        setIsDisabled,
        getInterviewRequest,
        createInterviewRequest,
        updateInterviewRequest,
        deleteInterviewRequest,
        fillInterviewRequest,
        emptyInterviewRequest
    };
}