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
                    <div className="signin-box">
                        <h2 className="slim-logo">
                            <a href="page-inscription.html">
                                <img src={logo} height="60px" alt='logo'/>
                            </a>
                        </h2>

                        <p>
                            Recrutez des travailleurs africains et économisez du temps et de l’argent
                            Vous avez besoin d’embaucher des travailleurs spécialisés dans votre entreprise ?
                            Vous cherchez à recruter des travailleurs pour votre entreprise et la pénurie de 
                            main-d’œuvre vous freine ? Vous recherchez une solution pour recruter des travailleurs 
                            étrangers, mais vous ne savez pas comment vous y prendre ni par où commencer ?
                            Nova Work Online a la solution pour vous ! Nova Work Online a mis au point une véritable 
                            Marketplace de travailleurs Africains compétents structuré et unique qui assure la qualité 
                            et l’adaptation de votre projet de recrutement. En fonction de vos besoins, nous vous aidons 
                            à recruter les travailleurs virtuels spécialisés et les perles rares dont vous avez besoin pour 
                            garantir la sécurité opérationnelle de votre entreprise. Nous prenons en charge votre projet de A à Z. 
                            Nous évaluons les compétences techniques des candidats afin de répondre à vos besoins. Nous sommes 
                            également attentifs aux aptitudes humaines qui les aideront à s’intégrer avec succès dans l’atmosphère 
                            québécoise du travail
                        </p>

                        <p>Inscrivez-vous pour accéder à votre espace</p>

                        <p className="tx-12">&copy; Copyright 2023. All Rights Reserved.</p>
                    </div>
                </div>
        </Layout.AuthLayout>
    )
}