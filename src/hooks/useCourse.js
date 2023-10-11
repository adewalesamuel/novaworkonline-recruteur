import { useState } from 'react';
import { Services } from '../services';

export const useCourse = () => {
    const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [slug, setSlug] = useState('');
	const [description, setDescription] = useState('');
	const [estimated_length, setEstimated_length] = useState('');
	const [lesson_length, setLesson_length] = useState('');
	const [cover_img_url, setCover_img_url] = useState('');
	const [author, setAuthor] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getCourse = (courseId, signal) => {        
        return Services.CourseService.getById(courseId, signal)
        .then(response => {
            fillCourse(response.course);
            setIsDisabled(false);
        });
    }

    const createCourse = signal => {
        const payload = {
            name,
		slug,
		description,
		estimated_length,
		lesson_length,
		cover_img_url,
		author,
		
        };

        return Services.CourseService.create(JSON.stringify(payload), signal);
    }
    const updateCourse = (courseId, signal) => {
        const payload = {
            name,
		slug,
		description,
		estimated_length,
		lesson_length,
		cover_img_url,
		author,
		
        };

        return Services.CourseService.update(courseId, JSON.stringify(payload), signal);
    }
    const deleteCourse = (courseId, signal) => {
        return Services.CourseService.destroy(courseId, signal);
    }
    const fillCourse = (course) => {
        setId(course.id);
        setName(course.name ?? '');
		setSlug(course.slug ?? '');
		setDescription(course.description ?? '');
		setEstimated_length(course.estimated_length ?? '');
		setLesson_length(course.lesson_length ?? '');
		setCover_img_url(course.cover_img_url ?? '');
		setAuthor(course.author ?? '');
		
    }
    const emptyCourse = () => {
        setId('');
        setName('');
		setSlug('');
		setDescription('');
		setEstimated_length('');
		setLesson_length('');
		setCover_img_url('');
		setAuthor('');
		
    }

    return {
        id,
        name,
		slug,
		description,
		estimated_length,
		lesson_length,
		cover_img_url,
		author,
		
        errors,
        isDisabled,
        setName,
		setSlug,
		setDescription,
		setEstimated_length,
		setLesson_length,
		setCover_img_url,
		setAuthor,
		
        setId,
        setErrors,
        setIsDisabled,
        getCourse,
        createCourse,
        updateCourse,
        deleteCourse,
        fillCourse,
        emptyCourse
    };
}