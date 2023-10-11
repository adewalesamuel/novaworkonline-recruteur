import { useState } from 'react';
import { Services } from '../services';

export const useRole = () => {
    const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [slug, setSlug] = useState('');
	const [permissions, setPermissions] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getRole = (roleId, signal) => {        
        return Services.RoleService.getById(roleId, signal)
        .then(response => {
            fillRole(response.role);
            setIsDisabled(false);
        });
    }

    const createRole = signal => {
        const payload = {
            name,
		slug,
		permissions,
		
        };

        return Services.RoleService.create(JSON.stringify(payload), signal);
    }
    const updateRole = (roleId, signal) => {
        const payload = {
            name,
		slug,
		permissions,
		
        };

        return Services.RoleService.update(roleId, JSON.stringify(payload), signal);
    }
    const deleteRole = (roleId, signal) => {
        return Services.RoleService.destroy(roleId, signal);
    }
    const fillRole = (role) => {
        setId(role.id);
        setName(role.name ?? '');
		setSlug(role.slug ?? '');
		setPermissions(role.permissions ?? '');
		
    }
    const emptyRole = () => {
        setId('');
        setName('');
		setSlug('');
		setPermissions('');
		
    }

    return {
        id,
        name,
		slug,
		permissions,
		
        errors,
        isDisabled,
        setName,
		setSlug,
		setPermissions,
		
        setId,
        setErrors,
        setIsDisabled,
        getRole,
        createRole,
        updateRole,
        deleteRole,
        fillRole,
        emptyRole
    };
}