import { useCallback, useEffect, useState } from "react";
import { Components } from "../components";
import { Hooks } from "../hooks"
import { Services } from "../services";
import { Utils } from "../utils";

export function ProfileView(props) {
    const abortController = new AbortController();

    const useRecruiter = Hooks.useRecruiter();

    const [countries, setCountries] = useState([]);
    const [errorMessages, setErrorMessages] = useState([]); 

    const handleProfileSubmit = async e => {
        e.preventDefault();
        useRecruiter.setIsDisabled(true)

        try {
            const {recruiter} = await useRecruiter.updateRecruiter(abortController.signal);
            
            Utils.Auth.setUser(recruiter);
        } catch (error) {
            if ('messages' in error)
                error.messages.then(messages => setErrorMessages(messages));
        }finally {useRecruiter.setIsDisabled(false)}
    }

    const init = useCallback(async () => {
        try {
            await useRecruiter.getRecruiter(abortController.signal);

            const { countries } = await Services.CountryService.getAll(abortController.signal);

            setCountries(countries);
        } catch (error) {
            console.log(error);
        } finally {useRecruiter.setIsDisabled(false)};
    }, [])

    useEffect(() => {
      init()
    }, [init])

    return (
        <>
            <div className="slim-pageheader">
                <ol className="breadcrumb slim-breadcrumb">
                </ol>
                <h6 className="slim-pagetitle">Modifer profil</h6>
            </div>
            <Components.Container>
                <Components.ErrorMessages>
                    {errorMessages}
                </Components.ErrorMessages>
                <Components.RecruiterForm useRecruiter={useRecruiter} isDisabled={useRecruiter.isDisabled} 
                handleFormSubmit={handleProfileSubmit} countries={countries}/>
            </Components.Container>
        </>
    )
}