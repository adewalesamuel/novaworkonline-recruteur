import { Layout } from "../layouts";
import { Hooks } from '../hooks'
import { Components } from "../components";

import logo from '../assets/img/logo.png';
import { useState } from "react";
import { Utils } from "../utils";
import { useSearchParams } from "react-router-dom";
import { Services } from "../services";

export function LoginView(props){
    const aborController = new AbortController();

    const [searchParams, setSearchParams] = useSearchParams();
    const useRecruiter = Hooks.useRecruiter();

    const [errorMessages, setErrorMessages] = useState([]); 

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setErrorMessages([]);
        
        useRecruiter.setIsDisabled(true);
        
        try {
            const payload = {
                email: useRecruiter.email,
                password: useRecruiter.password,
            };

            const response = await Services.AuthService.login(
                JSON.stringify(payload), aborController.signal)
    
            Utils.Auth.setUser(response.recruiter);
            Utils.Auth.setSessionToken(response.tk);

            window.location.replace(`${searchParams.get('from') ?? "/"}`);
        } catch (error) {            
            if ('messages' in error)
                error.messages.then(messages => setErrorMessages(messages));
        } finally {
            useRecruiter.setIsDisabled(false);
        }

    }


    return (
        <Layout.AuthLayout>
            <div className="signin-right">
                <div className="signin-box">
                    <h2 className="signin-title-primary">Connexion !</h2>
                    <h3 className="signin-title-secondary">Connectez vous à votre compte.</h3>
                    <Components.ErrorMessages>
                        {errorMessages}
                    </Components.ErrorMessages>
                    <Components.LoginForm useRecruiter={useRecruiter} 
                    handleSubmit={handleRegisterSubmit} isDisabled={useRecruiter.isDisabled}/>
                </div>
            </div>
            <div className="signin-left d-md-block d-none">
                <Components.AuthLeftSide />
            </div>
        </Layout.AuthLayout>
    )
}