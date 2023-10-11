import { useState } from 'react';
import { Services } from '../services';

export const useProject = () => {
    const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [slug, setSlug] = useState('');
	const [description, setDescription] = useState('');
	const [recruiter_id, setRecruiter_id] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getProject = (projectId, signal) => {        
        return Services.ProjectService.getById(projectId, signal)
        .then(response => {
            fillProject(response.project);
            setIsDisabled(false);
        });
    }

    const createProject = signal => {
        const payload = {
            name,
		description,
		recruiter_id,
		
        };

        return Services.ProjectService.create(JSON.stringify(payload), signal);
    }
    const updateProject = (projectId, signal) => {
        const payload = {
            name,
		description,
		recruiter_id,
		
        };

        return Services.ProjectService.update(projectId, JSON.stringify(payload), signal);
    }
    const deleteProject = (projectId, signal) => {
        return Services.ProjectService.destroy(projectId, signal);
    }
    const fillProject = (project) => {
        setId(project.id);
        setName(project.name ?? '');
		setSlug(project.slug ?? '');
		setDescription(project.description ?? '');
		setRecruiter_id(project.recruiter_id ?? '');
		
    }
    const emptyProject = () => {
        setId('');
        setName('');
		setSlug('');
		setDescription('');
		setRecruiter_id('');
		
    }

    return {
        id,
        name,
		slug,
		description,
		recruiter_id,
		
        errors,
        isDisabled,
        setName,
		setSlug,
		setDescription,
		setRecruiter_id,
		
        setId,
        setErrors,
        setIsDisabled,
        getProject,
        createProject,
        updateProject,
        deleteProject,
        fillProject,
        emptyProject
    };
}