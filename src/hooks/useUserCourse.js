import { useState } from 'react';
import { Services } from '../services';

export const useUserCourse = () => {
    const [id, setId] = useState('');
	const [progress, setProgress] = useState('');
	const [course_id, setCourse_id] = useState('');
	const [user_id, setUser_id] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getUserCourse = (usercourseId, signal) => {        
        return Services.UserCourseService.getById(usercourseId, signal)
        .then(response => {
            fillUserCourse(response.usercourse);
            setIsDisabled(false);
        });
    }

    const createUserCourse = signal => {
        const payload = {
            progress,
		course_id,
		user_id,
		
        };

        return Services.UserCourseService.create(JSON.stringify(payload), signal);
    }
    const updateUserCourse = (usercourseId, signal) => {
        const payload = {
            progress,
		course_id,
		user_id,
		
        };

        return Services.UserCourseService.update(usercourseId, JSON.stringify(payload), signal);
    }
    const deleteUserCourse = (usercourseId, signal) => {
        return Services.UserCourseService.destroy(usercourseId, signal);
    }
    const fillUserCourse = (usercourse) => {
        setId(usercourse.id);
        setProgress(usercourse.progress ?? '');
		setCourse_id(usercourse.course_id ?? '');
		setUser_id(usercourse.user_id ?? '');
		
    }
    const emptyUserCourse = () => {
        setId('');
        setProgress('');
		setCourse_id('');
		setUser_id('');
		
    }

    return {
        id,
        progress,
		course_id,
		user_id,
		
        errors,
        isDisabled,
        setProgress,
		setCourse_id,
		setUser_id,
		
        setId,
        setErrors,
        setIsDisabled,
        getUserCourse,
        createUserCourse,
        updateUserCourse,
        deleteUserCourse,
        fillUserCourse,
        emptyUserCourse
    };
}