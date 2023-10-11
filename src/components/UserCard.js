import { Link } from "react-router-dom";

export function UserCard(props) {
    return (
        <div className="card-contact">
            <div className="tx-center">
                <img src={props.user.profil_img_url ?? "http://via.placeholder.com/500x500"}
                className="card-img" alt="" height={"120px"} style={{objectFit: "cover"}}/>
                <h5 className="mg-t-10 mg-b-5">
                    <Link to={`/candidats/${props.user.id}`} className="contact-name">
                        {props.user.lastname} {props.user.firstname}
                    </Link>
                </h5>
                <p>{props.user.job_title?.name ?? "Non renseigné"}</p>
                <Link to={`/candidats/${props.user.id}`} className="btn btn-primary rounded d-block">
                    Voir le profil
                </Link>
            </div>
        </div>
    )
}