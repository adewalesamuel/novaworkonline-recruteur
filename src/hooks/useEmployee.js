import { useState } from 'react';
import { Services } from '../services';

export const useEmployee = () => {
    const [id, setId] = useState('');
	const [user_id, setUser_id] = useState('');
	const [recruteur_id, setRecruteur_id] = useState('');
	const [project_id, setProject_id] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getEmployee = (employeeId, signal) => {        
        return Services.EmployeeService.getById(employeeId, signal)
        .then(response => {
            fillEmployee(response.employee);
            setIsDisabled(false);
        });
    }

    const createEmployee = signal => {
        const payload = {
            user_id,
		recruteur_id,
		project_id,
		
        };

        return Services.EmployeeService.create(JSON.stringify(payload), signal);
    }
    const updateEmployee = (employeeId, signal) => {
        const payload = {
            user_id,
		recruteur_id,
		project_id,
		
        };

        return Services.EmployeeService.update(employeeId, JSON.stringify(payload), signal);
    }
    const deleteEmployee = (employeeId, signal) => {
        return Services.EmployeeService.destroy(employeeId, signal);
    }
    const fillEmployee = (employee) => {
        setId(employee.id);
        setUser_id(employee.user_id ?? '');
		setRecruteur_id(employee.recruteur_id ?? '');
		setProject_id(employee.project_id ?? '');
		
    }
    const emptyEmployee = () => {
        setId('');
        setUser_id('');
		setRecruteur_id('');
		setProject_id('');
		
    }

    return {
        id,
        user_id,
		recruteur_id,
		project_id,
		
        errors,
        isDisabled,
        setUser_id,
		setRecruteur_id,
		setProject_id,
		
        setId,
        setErrors,
        setIsDisabled,
        getEmployee,
        createEmployee,
        updateEmployee,
        deleteEmployee,
        fillEmployee,
        emptyEmployee
    };
}