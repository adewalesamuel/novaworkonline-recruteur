import { Link, NavLink } from "react-router-dom";
import logo from '../assets/img/logo.png';

export function MainmenuV2(props){
    return (
        <div className="slim-sidebar">
            <h2 className="text-center py-3">
                <Link to="/"><img src={logo} height="55px" alt=""/></Link>
            </h2>

            <ul className="nav nav-sidebar mt-5 px-3">
                <li className="sidebar-nav-item my-2">
                    <NavLink to="/" className="sidebar-nav-link rounded">
                        <i className="icon ion-ios-keypad"></i> Dashbaord
                    </NavLink>
                </li>
                <li className="sidebar-nav-item my-2">
                    <NavLink to="/paiements" className="sidebar-nav-link rounded">
                        <i className="icon ion-ios-book-outline"></i> Abonnements
                    </NavLink>
                </li>
                <li className="sidebar-nav-item my-2">
                    <NavLink to="/employes" className="sidebar-nav-link rounded">
                        <i className="icon ion-ios-people-outline"></i> Mes employés
                    </NavLink>
                </li>
                <li className="sidebar-nav-item my-2">
                    <NavLink to="/projets" className="sidebar-nav-link rounded">
                        <i className="icon ion-ios-gear-outline"></i> Mes projets
                    </NavLink>
                </li>

            </ul>
      </div>
    )
}