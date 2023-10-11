import { Components } from '../components';
import { useEffect } from 'react';
import { Utils } from '../utils';
import { useNavigate } from 'react-router-dom';


export function MainLayout(props){
    const navigate = useNavigate();
    useEffect(() => {
        if (!navigate) return;
        if (!Utils.Auth.isLoggedIn()) navigate(('/connexion'));
    })
    if (!Utils.Auth.isLoggedIn()) return null;
    return (
        <>
            <Components.Header />
            <Components.MainMenu />
            <div className="slim-mainpanel">
                <div className="container">
                    {props.children}
                </div>
            </div>
            <Components.Footer />
        </>
    )
}