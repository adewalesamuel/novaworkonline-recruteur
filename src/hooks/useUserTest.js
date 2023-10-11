import { useState } from 'react';
import { Services } from '../services';

export const useUserTest = () => {
    const [id, setId] = useState('');
	const [test_id, setTest_id] = useState('');
	const [user_id, setUser_id] = useState('');
	const [status, setStatus] = useState('');
	const [current_step, setCurrent_step] = useState('');
	const [score, setScore] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getUserTest = (usertestId, signal) => {        
        return Services.UserTestService.getById(usertestId, signal)
        .then(response => {
            fillUserTest(response.usertest);
            setIsDisabled(false);
        });
    }

    const createUserTest = signal => {
        const payload = {
            test_id,
		user_id,
		status,
		current_step,
		score,
		
        };

        return Services.UserTestService.create(JSON.stringify(payload), signal);
    }
    const updateUserTest = (usertestId, signal) => {
        const payload = {
            test_id,
		user_id,
		status,
		current_step,
		score,
		
        };

        return Services.UserTestService.update(usertestId, JSON.stringify(payload), signal);
    }
    const deleteUserTest = (usertestId, signal) => {
        return Services.UserTestService.destroy(usertestId, signal);
    }
    const fillUserTest = (usertest) => {
        setId(usertest.id);
        setTest_id(usertest.test_id ?? '');
		setUser_id(usertest.user_id ?? '');
		setStatus(usertest.status ?? '');
		setCurrent_step(usertest.current_step ?? '');
		setScore(usertest.score ?? '');
		
    }
    const emptyUserTest = () => {
        setId('');
        setTest_id('');
		setUser_id('');
		setStatus('');
		setCurrent_step('');
		setScore('');
		
    }

    return {
        id,
        test_id,
		user_id,
		status,
		current_step,
		score,
		
        errors,
        isDisabled,
        setTest_id,
		setUser_id,
		setStatus,
		setCurrent_step,
		setScore,
		
        setId,
        setErrors,
        setIsDisabled,
        getUserTest,
        createUserTest,
        updateUserTest,
        deleteUserTest,
        fillUserTest,
        emptyUserTest
    };
}