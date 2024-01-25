import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import { Utils } from '../utils';
import { Dom } from '../utils/Dom';
import { Services } from '../services';

export function Header(props) {
    const user = Utils.Auth.getUser() ?? {};
    const navigate = useNavigate();
    
    const profilImg = (!user.profil_img_url || user.profil_img_url === "") ? 
    "http://via.placeholder.com/500x500" : user.profil_img_url;

    const handleLogoutClick = e => {
        e.preventDefault();
        Services.AuthService.logout();
        Utils.Auth.removeSessionToken();
        navigate('/connexion');
    }
    return (
        <div className="slim-header">
            <div className="container">
                <div className="slim-header-left">

                    {/* <div className="search-box">
                        <input type="text" className="form-control" placeholder="Rechercher" />
                        <button className="btn btn-primary"><i className="fa fa-search"></i></button>
                    </div> */}
                </div>
                <div className="slim-header-right" role='button'>
                    <div className="dropdown dropdown-c">
                        <span className="logged-user" onClick={e => Dom.toggleElement('#dropdownMenu')}>
                            <img src={profilImg} alt='' style={{objectFit:'cover'}}/>
                            <span>{user.firstname} {user.lastname}</span>
                            <i className="fa fa-angle-down"></i>
                        </span>
                        <div className="dropdown-menu dropdown-menu-right" id="dropdownMenu">
                            <nav className="nav">
                                <Link to="/profil" className="nav-link">
                                    <i className="icon ion-person"></i> Mon profil
                                </Link>
                                {/* <Link to="/notifications" className="nav-link">
                                    <i className="icon ion-ios-bell"></i> Notifications
                                    <span className="square-8"></span>
                                </Link> */}
                                <span className="nav-link text-danger" onClick={handleLogoutClick} role="button">
                                    <i className="icon ion-forward text-danger"></i> Se deconnecter
                                </span>
                            </nav>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}