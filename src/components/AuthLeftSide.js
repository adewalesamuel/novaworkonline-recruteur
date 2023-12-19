import logo from '../assets/img/logo.png';
import authBg from '../assets/img/auth-bg.jpeg';

export function AuthLeftSide() {
    return (
        <div className="signin-box position-absolute w-100 h-100" style={{
            top: 0,left: 0,backgroundImage: `url(${authBg})`, 
            backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <h2 className="slim-logo">
                <a href="page-inscription.html">
                    <img src={logo} height="60px" alt='logo'/>
                </a>
            </h2>
        </div>
    )
}