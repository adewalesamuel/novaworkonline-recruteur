import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Services } from "../services";
import { Components } from "../components";

export function ProjectListView(props) {
    const abortController = new AbortController();
    const { ProjectService } = Services;

    const [searchParams, setSearchParams] = useSearchParams();

    const tableAttributes = {
        'nom du projet': {},
        'description': {}
    }
    const tableActions = ['edit', 'delete'];
    
    const navigate = useNavigate();

    const [projects, setProjects] = useState([]);
    const [page, setPage] = useState(searchParams.get('page') ?? 1);
    const [isLoading, setIsLoading] = useState(false);

    const handleEditClick = (e, data) => {
        e.preventDefault();
        navigate(`/projets/${data.id}/modifier`);
    }

    const loadProjects = async () => {
        setIsLoading(true);

        try {
            const projectList = await ProjectService.getAll(
                {page: page}, abortController.signal);
            
            const projectsCopy = projects.map(project => 
                ({...project, user: project.user}))
            setProjects([...projectsCopy, 
                ...projectList.projects.data]);

        } catch (error) {
            console.log(error);
        }finally{setIsLoading(false)}
    }

    const init = useCallback(async () => {
        try {
            const {projects} = await ProjectService.getAll(
                {page: page}, abortController.signal);

            const projectData = projects.data.map((project, index) => {
                return {
                    'id': project.id,
                    'nom du projet': project.name,
                    'description': project.description
                }
            } );

            setProjects(projectData);
        } catch (error) {
            console.log(error);
        } finally {setIsLoading(false)};
    }, []);

    useEffect(() => {
      init()
    }, [init])

    useEffect(() => {
        // loadProjects();
    },[page]);

    return (
        <>
            <div className="slim-pageheader">
                <ol className="breadcrumb slim-breadcrumb">
                    <Link className="btn btn-info" to='/projet/creer'>
                        <i className="con ion-plus"></i> Ajouter un projet
                    </Link>
                </ol>
                <h6 className="slim-pagetitle">Mes projets</h6>
            </div> 
            <div className="row">
                <div className="col-12">
                    <div className="card card-table mb-4">
                        <div className="card-header">
                            <h6 className="slim-card-title">Liste des projets</h6>
                        </div>
                        <div className="table-responsive">
                            <Components.Table controllers={{handleEditClick}} tableAttributes={tableAttributes}
                            tableActions={tableActions} tableData={projects}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}