import { Link } from "react-router-dom";

export function LoginForm(props) {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <input disabled={props.isDisabled} type="email" className="form-control" 
                    value={props.useRecruiter.email} placeholder="Email" onChange={e => 
                    props.useRecruiter.setEmail(e.target.value)} required/>           
             </div>
            <div className="form-group mg-b-50">
                <input disabled={props.isDisabled} type="password" className="form-control" 
                    value={props.useRecruiter.password} onChange={e => 
                    props.useRecruiter.setPassword(e.target.value)} placeholder="Mot de passe" required/>
            </div>

            <button className="btn btn-primary btn-block btn-signin" disabled={props.isDisabled}
            onSubmit={props.handleSubmit}>
                {props.isDisabled ? "Chargement..." : "Connexion"}
            </button>

            <p className="mg-t-40 mg-b-0">Vous n'avez pas de compte ?
                <Link to="/inscription"> Inscrivez-vous</Link>
            </p>
            <p className="mg-b-0 text-center pt-3">
                <Link to="/motdepasse-oublie">Mot de passe oublié ?</Link>
            </p>
        </form>
    )
}