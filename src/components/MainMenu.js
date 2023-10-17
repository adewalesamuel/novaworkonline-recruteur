import { Link } from "react-router-dom";

export function MainMenu(props){
    return (
        <div className="slim-navbar">
            <div className="container">
                <ul className="nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="icon ion-ios-home-outline"></i>
                        <span>Tableau de bord</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/packs">
                        <i className="icon ion-ios-book-outline"></i>
                        <span>Abonnements</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/employes">
                        <i className="icon ion-ios-people-outline"></i>
                        <span>Mes employés</span>
                        </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/projets">
                        <i className="icon ion-ios-gear-outline"></i>
                        <span>Mes projets</span>
                    </Link>
                </li>
                </ul>
            </div>
        </div>
    )
}