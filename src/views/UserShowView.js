import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Services } from "../services";
import { Hooks } from "../hooks";
import { Utils } from "../utils";

export function UserShowView(props) {
    let abortController = new AbortController();
    const { UserService } = Services;

    const navigate = useNavigate();

    const resume = Hooks.useResume();
    const useInterviewRequest = Hooks.useInterviewRequest();

    const [user, setUser] = useState({});
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(false);

    const handleInterviewRequestClick = async (e) => {
      e.preventDefault();

      try {
          const {isConfirmed} = await Utils.SweetAlert.fireAlert(
            'inviter pour entretien', `${user.lastname} ${user.firstname}`);

          if (isConfirmed) {
            useInterviewRequest.setIsDisabled(true);
            await useInterviewRequest.createInterviewRequest(abortController.signal);
            navigate('/demandes-entretiens');
            //suceess toast
          }
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
              {!user.interview_request ? 
                <li className="nav-item">
                  <button className="nav-link btn-block btn" onClick={handleInterviewRequestClick}>
                    <i className="icon ion-ios-redo tx-purple"></i>Inviter pour entretien
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
                    <h6 className="tx-14 tx-gray-700">Genre</h6>
                    <p>{user.gender}</p>
                  </div>
                </div>
                <div className="media mg-t-25">
                  <div><i className="icon ion-ios-calendar-outline tx-18 lh-0"></i></div>
                  <div className="media-body mg-l-15 mg-t-2">
                    <h6 className="tx-14 tx-gray-700">Date de naissance</h6>
                    <p>{user.birth_date}</p>
                  </div>
                </div>
                <div className="media mg-t-25">
                  <div><i className="icon ion-ios-email-outline tx-24 lh-0"></i></div>
                  <div className="media-body mg-l-15 mg-t-4">
                    <h6 className="tx-14 tx-gray-700">Adresse mail</h6>
                    <span className="d-block">XXXXXXXXXX</span>
                  </div>
                </div>
                <div className="media mg-t-25">
                  <div><i className="icon ion-ios-telephone-outline tx-24 lh-0"></i></div>
                  <div className="media-body mg-l-15 mg-t-4">
                    <h6 className="tx-14 tx-gray-700">Numero de téléphone</h6>
                    <span className="d-block">XXXXXXXXXX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}