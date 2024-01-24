import { useState } from "react";

export function CustomPasswordInput(props) {
    const [isVisibie, setIsVisibie] = useState(false);
    return (
        <div className="w-100 position-relative">
            <input disabled={props.isDisabled} type={`${isVisibie ? "text": "password"}`} 
            className="form-control rounded-pill" value={props.password} 
            minLength={6} onChange={e => props.setPassword(e.target.value)} 
            placeholder={props.placeholder} />
            {isVisibie && 
                <i className="position-absolute icon ion-eye-disabled px-2" 
                style={{
                    top: "0", 
                    right: "0", 
                    fontSize: "1.7rem"}} 
                role="button" onClick={() => setIsVisibie(false)}></i>
            }
            {!isVisibie && 
                <i className="position-absolute icon ion-eye px-2" 
                style={{
                    top: "0", 
                    right: "0", 
                    fontSize: "1.7rem"}} 
                role="button" onClick={() => setIsVisibie(true)}></i>
            }
        </div>
    )
}