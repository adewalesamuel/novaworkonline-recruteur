import { useState } from 'react';
import { Services } from '../services';

export const useUser = () => {
    const [id, setId] = useState('');
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [birth_date, setBirth_date] = useState('');
	const [gender, setGender] = useState('');
	const [phone_number, setPhone_number] = useState('');
	const [city, setCity] = useState('');
	const [profil_img_url, setProfil_img_url] = useState('');
	const [api_token, setApi_token] = useState('');
	const [is_active, setIs_active] = useState('');
	const [is_qualified, setIs_qualified] = useState('');
	const [country_id, setCountry_id] = useState('');
	const [job_title_id, setJobtitle_id] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getUser = (userId, signal) => {        
        return Services.UserService.getById(userId, signal)
        .then(response => {
            fillUser(response.user);
            setIsDisabled(false);
        });
    }

    const createUser = signal => {
        const payload = {
            firstname,
		lastname,
		email,
		password,
		birth_date,
		gender,
		phone_number,
		city,
		profil_img_url,
		api_token,
		is_active,
		is_qualified,
		country_id,
		job_title_id,
		
        };

        return Services.UserService.create(JSON.stringify(payload), signal);
    }
    const updateUser = (userId, signal) => {
        const payload = {
            firstname,
		lastname,
		email,
		password,
		birth_date,
		gender,
		phone_number,
		city,
		profil_img_url,
		api_token,
		is_active,
		is_qualified,
		country_id,
		job_title_id,
		
        };

        return Services.UserService.update(userId, JSON.stringify(payload), signal);
    }
    const deleteUser = (userId, signal) => {
        return Services.UserService.destroy(userId, signal);
    }
    const fillUser = (user) => {
        setId(user.id);
        setFirstname(user.firstname ?? '');
		setLastname(user.lastname ?? '');
		setEmail(user.email ?? '');
		setPassword(user.password ?? '');
		setBirth_date(user.birth_date ?? '');
		setGender(user.gender ?? '');
		setPhone_number(user.phone_number ?? '');
		setCity(user.city ?? '');
		setProfil_img_url(user.profil_img_url ?? '');
		setApi_token(user.api_token ?? '');
		setIs_active(user.is_active ?? '');
		setIs_qualified(user.is_qualified ?? '');
		setCountry_id(user.country_id ?? '');
		setJobtitle_id(user.job_title_id ?? '');
		
    }
    const emptyUser = () => {
        setId('');
        setFirstname('');
		setLastname('');
		setEmail('');
		setPassword('');
		setBirth_date('');
		setGender('');
		setPhone_number('');
		setCity('');
		setProfil_img_url('');
		setApi_token('');
		setIs_active('');
		setIs_qualified('');
		setCountry_id('');
		setJobtitle_id('');
		
    }

    return {
        id,
        firstname,
		lastname,
		email,
		password,
		birth_date,
		gender,
		phone_number,
		city,
		profil_img_url,
		api_token,
		is_active,
		is_qualified,
		country_id,
		job_title_id,
		
        errors,
        isDisabled,
        setFirstname,
		setLastname,
		setEmail,
		setPassword,
		setBirth_date,
		setGender,
		setPhone_number,
		setCity,
		setProfil_img_url,
		setApi_token,
		setIs_active,
		setIs_qualified,
		setCountry_id,
		setJobtitle_id,
		
        setId,
        setErrors,
        setIsDisabled,
        getUser,
        createUser,
        updateUser,
        deleteUser,
        fillUser,
        emptyUser
    };
}