import { useState } from 'react';
import { Services } from '../services';

export const useLesson = () => {
    const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [slug, setSlug] = useState('');
	const [description, setDescription] = useState('');
	const [content, setContent] = useState('');
	const [type, setType] = useState('');
	const [estimated_length, setEstimated_length] = useState('');
	const [cover_img_url, setCover_img_url] = useState('');
	const [course_id, setCourse_id] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getLesson = (lessonId, signal) => {        
        return Services.LessonService.getById(lessonId, signal)
        .then(response => {
            fillLesson(response.lesson);
            setIsDisabled(false);
        });
    }

    const createLesson = signal => {
        const payload = {
            name,
		slug,
		description,
		content,
		type,
		estimated_length,
		cover_img_url,
		course_id,
		
        };

        return Services.LessonService.create(JSON.stringify(payload), signal);
    }
    const updateLesson = (lessonId, signal) => {
        const payload = {
            name,
		slug,
		description,
		content,
		type,
		estimated_length,
		cover_img_url,
		course_id,
		
        };

        return Services.LessonService.update(lessonId, JSON.stringify(payload), signal);
    }
    const deleteLesson = (lessonId, signal) => {
        return Services.LessonService.destroy(lessonId, signal);
    }
    const fillLesson = (lesson) => {
        setId(lesson.id);
        setName(lesson.name ?? '');
		setSlug(lesson.slug ?? '');
		setDescription(lesson.description ?? '');
		setContent(lesson.content ?? '');
		setType(lesson.type ?? '');
		setEstimated_length(lesson.estimated_length ?? '');
		setCover_img_url(lesson.cover_img_url ?? '');
		setCourse_id(lesson.course_id ?? '');
		
    }
    const emptyLesson = () => {
        setId('');
        setName('');
		setSlug('');
		setDescription('');
		setContent('');
		setType('');
		setEstimated_length('');
		setCover_img_url('');
		setCourse_id('');
		
    }

    return {
        id,
        name,
		slug,
		description,
		content,
		type,
		estimated_length,
		cover_img_url,
		course_id,
		
        errors,
        isDisabled,
        setName,
		setSlug,
		setDescription,
		setContent,
		setType,
		setEstimated_length,
		setCover_img_url,
		setCourse_id,
		
        setId,
        setErrors,
        setIsDisabled,
        getLesson,
        createLesson,
        updateLesson,
        deleteLesson,
        fillLesson,
        emptyLesson
    };
}