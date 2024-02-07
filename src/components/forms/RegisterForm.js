import { Link } from "react-router-dom";
import { Components } from "..";

export function RegisterForm(props) {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="row row-xs mg-b-10">
                <div className="col-sm-12 mb-3">
                    <input disabled={props.isDisabled} type="text" className="form-control rounded-pill" 
                    value={props.useRecruiter.company_name}  onChange={e => 
                    props.useRecruiter.setCompany_name(e.target.value)} placeholder="Nom de la compagnie" />
                </div>
                <div className="col-sm">
                    <input disabled={props.isDisabled} type="text" className="form-control rounded-pill" 
                    value={props.useRecruiter.lastname}  onChange={e => 
                    props.useRecruiter.setLastname(e.target.value)} placeholder="Responsable de recrutement" />
                </div>
                <div className="col-sm mg-t-10 mg-sm-t-0">
                    <input disabled={props.isDisabled} type="email" className="form-control rounded-pill" 
                    value={props.useRecruiter.email}  onChange={e => 
                    props.useRecruiter.setEmail(e.target.value)} placeholder="Email du recruteur" />
                </div>
            </div>
            <div className="row row-xs mg-b-10">
                <div className="col-sm-12 mb-3">
                    <input disabled={props.isDisabled} type="text" className="form-control rounded-pill" 
                    value={props.useRecruiter.location} placeholder="Localisation" onChange={e => 
                    props.useRecruiter.setLocation(e.target.value)}/>
                </div>
                <div className="col-sm mg-t-10 mg-sm-t-0">
                    <Components.CustomPasswordInput setPassword={props.useRecruiter.setPassword}
                    isDisabled={props.isDisabled} placeholder="Mot de passe" 
                    password={props.useRecruiter.password}/>
                </div>
                <div className="col-sm mg-t-10 mg-sm-t-0">
                    <Components.CustomPasswordInput setPassword={props.useRecruiter.setPassword_confirmation}
                    isDisabled={props.isDisabled} placeholder="Confirmer le mot de passe" 
                    password={props.useRecruiter.password_confirmation}/>
                </div>
            </div>

            <button className="btn btn-primary btn-block btn-signin rounded-pill" disabled={props.isDisabled}
            onSubmit={props.handleSubmit}>
                {props.isDisabled ? "Chargement..." : "S'inscrire"}
            </button>

            <p className="mg-t-40 mg-b-0">Vous avez déjà un compte ? 
                <Link to="/connexion">Connectez-vous</Link>
            </p>
        </form>
    )
}