import { useState } from "react";
import { Components } from "../components";
import { Hooks } from "../hooks";
import { useNavigate } from "react-router-dom";

export function ProjectCreateView(props) {
    let abortController = new AbortController();

    const navigate = useNavigate();

    const useProject = Hooks.useProject();

    const [errorMessages, setErrorMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleFormSubmit = async e => {
        e.preventDefault();
        useProject.setIsDisabled(true);
        
        try {
            await useProject.createProject(abortController.signal);
            navigate('/projets');
        } catch (error) {
            if ('messages' in error)
                error.messages.then(messages => setErrorMessages(messages));
        }finally{useProject.setIsDisabled(false)}
    }

    return (
        <>
            <div className="slim-pageheader">
                <ol className="breadcrumb slim-breadcrumb">
                </ol>
                <h6 className="slim-pagetitle">Créer un projet</h6>
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