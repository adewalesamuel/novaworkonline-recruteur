import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Utils } from "../utils";


export function AuthLayout(props) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!navigate) return;
        if (Utils.Auth.isLoggedIn()) navigate(('/'));
    }, [navigate])

    if (Utils.Auth.isLoggedIn()) return null;
    return (
        <div className="d-md-flex flex-row-reverse">
            {props.children}
        </div>
    )
}