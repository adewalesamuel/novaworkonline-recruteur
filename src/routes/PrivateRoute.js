import { useNavigate } from "react-router-dom";
import { Utils } from "../utils";
import { useEffect } from "react";

export function PrivateRoute(props){
    const navigate = useNavigate();
    const isLoggedIn = Utils.Auth.isLoggedIn();

    const pathname = window.location.pathname;
    const from = pathname !== "/" ? pathname : "";
    
    useEffect(() => {
        if (!isLoggedIn) navigate(`/register${from ? 
            '?from=' + from : ''}`, {replace: true});
    }, [])
    return (
        <>
            {Utils.Auth.isLoggedIn() ? props.View : null}
        </>
    )
}