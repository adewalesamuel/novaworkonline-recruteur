import { useState } from 'react';
import { Services } from '../services';

export const useRecruiter = () => {
    const [id, setId] = useState('');
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [birth_date, setBirth_date] = useState('');
	const [gender, setGender] = useState('');
	const [phone_number, setPhone_number] = useState('');
	const [location, setLocation] = useState('');
	const [profil_img_url, setProfil_img_url] = useState('');
	const [company_name, setCompany_name] = useState('');
	const [company_info, setCompany_info] = useState('');
	const [api_token, setApi_token] = useState('');
	const [is_active, setIs_active] = useState('');
	const [country_id, setCountry_id] = useState('');
	
	const [password_confirmation, setPassword_confirmation] = useState('');

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getRecruiter = (signal) => {        
        return Services.RecruiterService.getProfile(signal)
        .then(response => {
            fillRecruiter(response.recruiter);
            setIsDisabled(false);
			
			return response;
        });
    }

    const createRecruiter = signal => {
        const payload = {
            firstname,
		lastname,
		email,
		birth_date,
		gender,
		phone_number,
		location,
		profil_img_url,
		company_name,
		company_info,
		country_id,
		
        };

        return Services.RecruiterService.create(JSON.stringify(payload), signal);
    }
    const updateRecruiter = (signal) => {
        const payload = {
            firstname,
		lastname,
		email,
		birth_date,
		gender,
		phone_number,
		location,
		profil_img_url,
		company_name,
		company_info,
		country_id,
		
        };

        return Services.RecruiterService.update(JSON.stringify(payload), signal);
    }
    const deleteRecruiter = (recruiterId, signal) => {
        return Services.RecruiterService.destroy(recruiterId, signal);
    }
    const fillRecruiter = (recruiter) => {
        setId(recruiter.id);
        setFirstname(recruiter.firstname ?? '');
		setLastname(recruiter.lastname ?? '');
		setEmail(recruiter.email ?? '');
		setPassword(recruiter.password ?? '');
		setBirth_date(recruiter.birth_date ?? '');
		setGender(recruiter.gender ?? '');
		setPhone_number(recruiter.phone_number ?? '');
		setLocation(recruiter.location ?? '');
		setProfil_img_url(recruiter.profil_img_url ?? '');
		setCompany_name(recruiter.company_name ?? '');
		setCompany_info(recruiter.company_info ?? '');
		setApi_token(recruiter.api_token ?? '');
		setIs_active(recruiter.is_active ?? '');
		setCountry_id(recruiter.country_id ?? '');
		
    }
    const emptyRecruiter = () => {
        setId('');
        setFirstname('');
		setLastname('');
		setEmail('');
		setPassword('');
		setBirth_date('');
		setGender('');
		setPhone_number('');
		setLocation('');
		setProfil_img_url('');
		setCompany_name('');
		setCompany_info('');
		setApi_token('');
		setIs_active('');
		setCountry_id('');
		
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
		location,
		profil_img_url,
		company_name,
		company_info,
		api_token,
		is_active,
		country_id,
		
		password_confirmation,
        errors,
        isDisabled,
        setFirstname,
		setLastname,
		setEmail,
		setPassword,
		setBirth_date,
		setGender,
		setPhone_number,
		setLocation,
		setProfil_img_url,
		setCompany_name,
		setCompany_info,
		setApi_token,
		setIs_active,
		setCountry_id,

		setPassword_confirmation,
		
        setId,
        setErrors,
        setIsDisabled,
        getRecruiter,
        createRecruiter,
        updateRecruiter,
        deleteRecruiter,
        fillRecruiter,
        emptyRecruiter
    };
}