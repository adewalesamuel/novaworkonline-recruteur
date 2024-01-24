import { Layout } from "../layouts";
import { Hooks } from '../hooks'
import { Components } from "../components";

import { useState } from "react";
import { Utils } from "../utils";
import { useSearchParams } from "react-router-dom";
import { Services } from "../services";

export function RegisterView(props){
    const aborController = new AbortController();

    const [searchParams, ] = useSearchParams();
    const useRecruiter = Hooks.useRecruiter();

    const [errorMessages, setErrorMessages] = useState([]); 

    const validateFormFields = (validatorList) => {
        const errorList = [];

        validatorList.forEach(validatorItem => {
            const {pattern, value, message} = validatorItem;

            if (!pattern.test(value)) errorList.push(message);
        })

        return errorList;
    }

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setErrorMessages([]);
        
        useRecruiter.setIsDisabled(true);
        
        try {
            const errorList =  validateFormFields([
                {
                    value: useRecruiter.lastname,
                    pattern: new RegExp('[A-Za-z]', 'g'),
                    message: 'Le nom ne doit pas contenir de chiffres'
                },
                {
                    value: useRecruiter.password,
                    pattern: new RegExp('[A-Z]', 'g'),
                    message: 'le mot de passe doit contenir au moins une lettre majuscule'
                },
                {
                    value: useRecruiter.password,
                    pattern: new RegExp('[a-z]', 'g'),
                    message: 'le mot de passe doit contenir au moins une lettre minuscule'
                },
                {
                    value: useRecruiter.password,
                    pattern: new RegExp('[@$!%*#?&]', 'gi'),
                    message: 'le mot de passe doit contenir au moins un caractère spécial'
                }

            ]);

            if (errorList.length > 0) {
                const error = new Error('Une erreur est survenue');
                error.errorList = errorList

                throw error;
            }

            if (useRecruiter.password !== useRecruiter.password_confirmation)
                return setErrorMessages(['Vos mots de passes ne correspondent pas!']);

            const payload = {
                company_name: useRecruiter.company_name,
                firstname: useRecruiter.firstname,
                lastname: useRecruiter.lastname,
                email: useRecruiter.email,
                location: useRecruiter.location,
                password: useRecruiter.password,
                password_confirmation: useRecruiter.password_confirmation
            };

            const response = await Services.AuthService.register(
                JSON.stringify(payload), aborController.signal)
    
            Utils.Auth.setUser(response.recruiter);
            Utils.Auth.setSessionToken(response.tk);

            window.location.replace(`${searchParams.get('from') ?? "/"}`);
        } catch (error) {
            if ('errorList' in error)
            setErrorMessages(error.errorList)
        
            if ('messages' in error)
                error.messages.then(messages => {
                    setErrorMessages(messages);
                });
        } finally {
            useRecruiter.setIsDisabled(false)
        }

    }


    return (
        <Layout.AuthLayout>
            <div className="signin-right">
                <div className="signin-box signup">
                    <h3 className="signin-title-primary">Inscription !</h3>
                    <h5 className="signin-title-secondary lh-4">
                        inscrivez vous gratuitement en quelque secondes !
                    </h5>
                    <Components.ErrorMessages>
                        {errorMessages}
                    </Components.ErrorMessages>
                    <Components.RegisterForm useRecruiter={useRecruiter} handleSubmit={handleRegisterSubmit}
                    isDisabled={useRecruiter.isDisabled}/>
                </div>

                </div>
                <div className="signin-left d-md-block d-none">
                    <Components.AuthLeftSide />
                </div>
        </Layout.AuthLayout>
    )
}