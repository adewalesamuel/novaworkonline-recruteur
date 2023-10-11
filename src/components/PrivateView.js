import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { Utils } from "../utils";

export function PrivateView(props) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!Utils.Auth.isLoggedIn()){
            navigate('/auth');
        }
    })

    if (!Utils.Auth.isLoggedIn()){
        return null;
    }else {
        return <props.Component {...props}/>
    }

}