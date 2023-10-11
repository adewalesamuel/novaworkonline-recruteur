import { useState } from 'react';
import { Services } from '../services';

export const useCountry = () => {
    const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [code, setCode] = useState('');
	const [phone_code, setPhone_code] = useState('');
	const [flag_icon_url, setFlag_icon_url] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getCountry = (countryId, signal) => {        
        return Services.CountryService.getById(countryId, signal)
        .then(response => {
            fillCountry(response.country);
            setIsDisabled(false);
        });
    }

    const createCountry = signal => {
        const payload = {
            name,
		code,
		phone_code,
		flag_icon_url,
		
        };

        return Services.CountryService.create(JSON.stringify(payload), signal);
    }
    const updateCountry = (countryId, signal) => {
        const payload = {
            name,
		code,
		phone_code,
		flag_icon_url,
		
        };

        return Services.CountryService.update(countryId, JSON.stringify(payload), signal);
    }
    const deleteCountry = (countryId, signal) => {
        return Services.CountryService.destroy(countryId, signal);
    }
    const fillCountry = (country) => {
        setId(country.id);
        setName(country.name ?? '');
		setCode(country.code ?? '');
		setPhone_code(country.phone_code ?? '');
		setFlag_icon_url(country.flag_icon_url ?? '');
		
    }
    const emptyCountry = () => {
        setId('');
        setName('');
		setCode('');
		setPhone_code('');
		setFlag_icon_url('');
		
    }

    return {
        id,
        name,
		code,
		phone_code,
		flag_icon_url,
		
        errors,
        isDisabled,
        setName,
		setCode,
		setPhone_code,
		setFlag_icon_url,
		
        setId,
        setErrors,
        setIsDisabled,
        getCountry,
        createCountry,
        updateCountry,
        deleteCountry,
        fillCountry,
        emptyCountry
    };
}