import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { Services } from "../services";
import { Components } from "../components";

import entretienIcon from '../assets/img/entretien-icon.png';
import projetIcon from '../assets/img/project-icons.png';
import candidatIcon from "../assets/img/candidat-qualifie.png";

export function DashboardView(props) {
    let abortController = new AbortController();

    const tableAttributes = {
        '': {},
        'nom et prenoms': {},
        'domaine': {}
    }
    const tableActions = ['read']; 

    const navigate = useNavigate();

    const [qualified_user_count, setQualified_user_count] = useState(0);
    const [interview_request_count, setInterview_request_count] = useState(0);
    const [employees_count, setEmployees_count] = useState(0);
    const [projects_count, setProjets_count] = useState(0);
    const [users, setUsers] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const handleReadClick = (e, data) => {
        e.preventDefault();
        navigate(`/candidats/${data.id}`);
    }

    const init = useCallback(async () => {
        try {
            const {qualified_user_count, interview_request_count,
                employees_count, projects_count} = await Services.RecruiterService
                .getAnalytics(abortController.signal);

            setQualified_user_count(qualified_user_count);
            setInterview_request_count(interview_request_count);
            setEmployees_count(employees_count);
            setProjets_count(projects_count);

            const { users } = await Services.UserService.getQualified(abortController.signal);
            const userData = users.data.map((user, index) => {
                return {
                    '': '',
                    'id': user.id,
                    'nom et prenoms': `${user.lastname} ${user.firstname}`,
                    'domaine': user.job_title?.name
                }
            } );

            setUsers(userData);
        } catch (error) {
        } finally {setIsLoading(false)};
    }, [])

    useEffect(() => {
      init();

      return () => {
            abortController.abort();
            abortController = new AbortController();
        }
    }, [init])

    return (
        <>
            <div className="row">
                <div className="col-sm-6 col-lg-4">
                    <div className="card card-status pointer" role="button"
                    onClick={() => navigate('/candidats/qualifies')}>
                        <div className="media" role="button">
                            <img className="im-fluid" src={candidatIcon} 
                            style={{width: "50px"}} alt="candidats qualifies" />
                            <div className="media-body">
                            <strong>Candidats qualifiés</strong>
                            <h1 className="text-primary text-center">{qualified_user_count}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mg-t-10 mg-sm-t-0">
                    <div className="card card-status pointer" role="button"
                    onClick={() => navigate('/demandes-entretiens')}>
                        <div className="media">
                            <img className="icon" src={entretienIcon} width="80px" alt="entretiens"/>
                            <div className="media-body">
                            <strong>Invités pour entretiens</strong>
                            <h1 className="text-primary text-center">{interview_request_count}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mg-t-10 mg-lg-t-0">
                    <div className="card card-status" role="button"
                    onClick={() => navigate('/employes')}>
                    <div className="media">
                        <i className="icon ion-ios-people-outline tx-primary"></i>
                        <div className="media-body">
                        <strong>Mes employés</strong>
                        <h1 className="text-primary text-center">{employees_count}</h1>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mg-t-10 mg-lg-t-0 mt-3">
                    <div className="card card-status">
                    <div className="media">
                        <i className="icon ion-card tx-pink"></i>
                        <div className="media-body">
                        <strong>Montant dépensé</strong>
                        <h1>0</h1>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mg-t-10 mg-lg-t-0 mt-3">
                    <div className="card card-status" role="button"
                    onClick={() => navigate('/projets')}>
                    <div className="media">
                        <img className="icon" src={projetIcon} alt="projets"/>
                        <div className="media-body">
                        <strong>Projets</strong>
                        <h1 className="text-primary text-center">{projects_count}</h1>
                        </div>
                    </div>
                    </div>
                </div>
            </div> 
            <div className="row row-sm mg-t-20">
                <div className="col-12">
                    <Components.Loader isLoading={isLoading}>
                        <div className="card card-table mb-4">
                            <div className="card-header">
                                <h6 className="slim-card-title text-primary">Nouveaux candidats qualifiés</h6>
                            </div>
                            <div className="table-responsive">
                                <Components.Table controllers={{handleReadClick}} 
                                tableData={users} tableActions={tableActions}
                                tableAttributes={tableAttributes} />
                            </div>
                        </div>
                    </Components.Loader>
                </div>
            </div>
        </>
    )
}