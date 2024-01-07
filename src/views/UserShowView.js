import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Services } from "../services";
import { Hooks } from "../hooks";
import { Utils } from "../utils";
import { Components } from "../components";

export function UserShowView(props) {
    let abortController = new AbortController();
    const { UserService } = Services;

    const navigate = useNavigate();

    const resume = Hooks.useResume();
    const useInterviewRequest = Hooks.useInterviewRequest();
    const useEmployee = Hooks.useEmployee();

    const [user, setUser] = useState({});
    const [projects, setProjects] = useState([]);
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true);
    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
    const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false);

    const handleInterviewRequestClick = async (e) => {
      e.preventDefault();

      if (useInterviewRequest.isDisabled) return;

      try {
          const {isConfirmed} = await Utils.SweetAlert.fireAlert(
            'inviter pour entretien', `${user.lastname} ${user.firstname}`);

          if (isConfirmed) {
            useInterviewRequest.setIsDisabled(true);
            await useInterviewRequest.createInterviewRequest(abortController.signal);
            navigate('/demandes-entretiens', {replace: true});
            //suceess toast
          }
      } catch (error) {
        const messages = await error.messages;

        if (error.status === 500) {
          const message = messages[0];

          if (messages.length >= 1 && 
            (message === "Votre souscription à expirée" || 
            message === "Vous n'avez pas de souscription")) {

            messages.push('Veuillez souscrire à un abonnement pour recruter ce candidat');
            
            alert(messages.join('\n'))
            navigate('/packs')
          }
        }
      }finally{useInterviewRequest.setIsDisabled(false);}
    }

    const handleEmployeClick = e => {
      e.preventDefault();
      setIsProjectModalOpen(true);
      useEmployee.setUser_id(user.id);
    } 
    const handleRejectClick = e => {
      e.preventDefault();
      setIsInterviewModalOpen(true);
      useInterviewRequest.setUser_id(user.id);
    }

    const handleEmployeSubmit = async (e) => {
      e.preventDefault();

      if (useEmployee.isDisabled) return;

      useEmployee.setIsDisabled(true);

      try {
            await useEmployee.createEmployee(abortController.signal);
            navigate('/employes');
      } catch (error) {
          console.log(error);
      }finally{useEmployee.setIsDisabled(false);}
    }

    const handleInterViewRequestSubmit = async e => {
      e.preventDefault();

      if (useInterviewRequest.isDisabled) return;

      useInterviewRequest.setIsDisabled(true);

      try {
            const payload = {
              'description': useInterviewRequest.description
            }
            await Services.InterviewRequestService
            .reject(user.interview_request.id, JSON.stringify(payload), 
            abortController.signal);

            navigate('/demandes-entretiens');
      } catch (error) {
          console.log(error);
      }finally{useInterviewRequest.setIsDisabled(false);}
    }

    const init = useCallback(async () => {
        try {
            const {user} = await UserService.getById(id, 
              abortController.signal);

            setUser(user);
            resume.fillResume(user?.resume ?? {});
            useInterviewRequest.setUser_id(user.id);

            const {projects} = await Services.ProjectService.getAll(
              abortController.signal);
            setProjects(projects.data);
        } catch (error) {
            console.log(error);
        } finally {setIsLoading(false)};
    }, []);

    useEffect(() => {
      init();

      return () => {
            abortController.abort();
            abortController = new AbortController();
        }
    }, [init])

    return (
        <>
            <div className="slim-pageheader">
                <ol className="breadcrumb slim-breadcrumb">
                </ol>
                <h6 className="slim-pagetitle">Profil du candidat</h6>
            </div>
            <Components.Loader isLoading={isLoading}>
              <div className="row row-sm">
                <div className="col-lg-8">
                  <div className="card card-profile">
                    <div className="card-body">
                      <div className="media">
                        <img src={user.profil_img_url ?? "http://via.placeholder.com/500x500"} 
                        alt="" height={"120px"} style={{objectFit: 'cover'}}/>
                        <div className="media-body">
                          <h3 className="card-profile-name">{user.lastname} {user.firstname}</h3>
                          <p className="card-profile-position">{user.job_title?.name ?? ""}</p>

                          <p className="mg-b-0">{resume.profil ?? ''}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="nav nav-activity-profile mg-t-20">
                    <li className="nav-item">
                      <Link to={`${process.env.REACT_APP_HOST}/candidats/${user.id}/cv`} 
                      className="nav-link" target="_blank">
                        <i className="icon ion-document-text tx-success"></i> Voir le cv
                      </Link>
                    </li>
                    {!user.interview_request || user.interview_request.status === "rejected" ? 
                      <li className="nav-item">
                        <button className="nav-link btn-block btn" onClick={handleInterviewRequestClick}>
                          <i className="icon ion-ios-redo tx-purple"> </i> 
                          {useInterviewRequest.isDisabled ? "Chargement..." : "Inviter pour entretien"}
                        </button>
                      </li>
                    : null }
                    {user.interview_request && !user.employee && user.interview_request.status !== "rejected"? 
                      <li className="nav-item">
                        <button className="nav-link btn-block btn" onClick={handleEmployeClick}>
                          <i className="icon ion-person-add tx-primary"></i> Embaucher
                        </button>
                      </li>
                    : null}
                    {user.interview_request && user.interview_request.status !== "rejected" && !user.employee ? 
                      <li className="nav-item">
                        <button className="nav-link btn-block btn" onClick={handleRejectClick}>
                          <i className="icon ion-trash-a tx-danger"></i> Décliner
                        </button>
                      </li>
                    : null}

                  </ul>
                </div>

                <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                  <div className="card pd-25">
                    <div className="slim-card-title">Informations personnelles</div>

                    <div className="media-list mg-t-25">
                      <div className="media">
                        <div><i className="icon ion-link tx-24 lh-0"></i></div>
                        <div className="media-body mg-l-15 mg-t-4">
                          <h6 className="tx-14 tx-gray-700">Certificat</h6>
                          <p style={{wordBreak:'break-word'}}>
                          <a a href={user.certificat_url} className="btn btn-primary btn-block">
                            Voir le certificat
                          </a>
                            {/* <a href={user.certificat_url} target="_blank" rel="noreferrer">
                              {user.certificat_url}
                            </a> */}
                          </p>
                        </div>
                      </div>
                      <div className="media mg-t-25">
                        <div><i className="icon ion-ios-calendar-outline tx-18 lh-0"></i></div>
                        <div className="media-body mg-l-15 mg-t-2">
                          <h6 className="tx-14 tx-gray-700">Vidéo de présentation</h6>
                          <p>
                            <video src={user.video_url} width={"100%"} controls
                            style={{minHeight: "140px", backgroundColor: 'grey'}}></video>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </Components.Loader>
          {isProjectModalOpen ? 
            <Components.Modal title={"Embaucher le candidat"} isControlVisible={false} 
            handleModalClose={() => setIsProjectModalOpen(false)}>
              <Components.EmployeeForm useEmployee={useEmployee} projects={projects}
              isDisabled={useEmployee.isDisabled} handleFormSubmit={handleEmployeSubmit}/>
            </Components.Modal>
          : null}
          {isInterviewModalOpen ? 
            <Components.Modal title={"Rejeter le candidat"} isControlVisible={false} 
            handleModalClose={() => setIsInterviewModalOpen(false)}>
              <form>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                        <label htmlFor='description'>Raison du rejet</label>
                        <textarea className='form-control' type='text' id='description' 
                        name='description' placeholder='Veuillez spécifier la raison du rejet' 
                        value={useInterviewRequest.description ?? ''}  rows={5}
                        disabled={useInterviewRequest.isDisabled}  onChange={ e => 
                        useInterviewRequest.setDescription(e.target.value) ?? null}></textarea>
                    </div>
                  </div>
                  <div className='col-12 text-right'>
                    <button disabled={useInterviewRequest.isDisabled ?? false} type='submit' 
                    className='btn btn-primary px-5 rounded' onClick={handleInterViewRequestSubmit}>
                        <span>{useInterviewRequest.isDisabled ? "Chargement..." : "Validez"}</span>
                    </button>
                  </div>
                </div>
              </form>
            </Components.Modal>
          : null}
        </>
    )
}