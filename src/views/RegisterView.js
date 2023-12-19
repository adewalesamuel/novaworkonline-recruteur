import { Layout } from "../layouts";
import { Hooks } from '../hooks'
import { Components } from "../components";

import logo from '../assets/img/logo.png';
import { useState } from "react";
import { Utils } from "../utils";
import { useSearchParams } from "react-router-dom";
import { Services } from "../services";

export function RegisterView(props){
    const aborController = new AbortController();

    const [searchParams, setSearchParams] = useSearchParams();
    const useRecruiter = Hooks.useRecruiter();

    const [errorMessages, setErrorMessages] = useState([]); 

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setErrorMessages([]);

        if (useRecruiter.password !== useRecruiter.password_confirmation)
            return setErrorMessages(["Les mots de passe ne correcpondent pas !"])
        
        useRecruiter.setIsDisabled(true);
        
        try {
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
            console.log(error);
            // Utils.Error.handleError(error);
            
            if ('messages' in error)
                error.messages.then(messages => setErrorMessages(messages));
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