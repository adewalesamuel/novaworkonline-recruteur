import { useCallback, useEffect, useState } from "react";
import { Components } from "../components";
import { Hooks } from "../hooks";
import { useParams } from "react-router-dom";

export function ProjectEditView(props) {
    let abortController = new AbortController();

    const {id} = useParams();

    const useProject = Hooks.useProject();

    const [errorMessages, setErrorMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleFormSubmit = async e => {
        e.preventDefault();
        useProject.setIsDisabled(true);
        
        try {
            await useProject.updateProject(id, abortController.signal);
        } catch (error) {
            if ('messages' in error)
                error.messages.then(messages => setErrorMessages(messages));
        }finally{useProject.setIsDisabled(false)}
    }

    const init = useCallback(async () => {
        useProject.setIsDisabled(true);

        try {
            await useProject.getProject(id, abortController.signal);
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoading(false);
            useProject.setIsDisabled(false);
        }
    }, [])

    useEffect(() => {
        init();
    }, [init])
    return (
        <>
            <div className="slim-pageheader">
                <ol className="breadcrumb slim-breadcrumb">
                </ol>
                <h6 className="slim-pagetitle">Modifier le projet</h6>
            </div> 
            <Components.Container>
                <div className="row">
                    <div className="col-12">
                        <div className="card card-table mb-4 p-3 rounded">
                            <Components.ErrorMessages>
                                {errorMessages}
                            </Components.ErrorMessages>
                            <Components.ProjectForm useProject={useProject} 
                            isDisabled={useProject.isDisabled} handleFormSubmit={handleFormSubmit}/>
                        </div>
                    </div>
                </div>
            </Components.Container>
        </>
    )
}