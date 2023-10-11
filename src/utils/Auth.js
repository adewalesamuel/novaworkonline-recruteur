const getSessionToken = () => {
    return localStorage.getItem('rtk');
}

const isLoggedIn = () => {
    if (getSessionToken() === '' || !getSessionToken())
        return false;

    return true;
}

const setSessionToken = token => {
    localStorage.setItem('rtk', token)
}

const setUser = recruiter => {
    localStorage.setItem('recruiter', JSON.stringify(recruiter))
}

const removeSessionToken = () => {
    localStorage.removeItem('rtk');
    localStorage.removeItem('recruiter');
}

const redirectIfSessionExpired = (err, history) => {
    if (!err) return;
    
    if (err.status && err.status === 'Token is Expired') {
        removeSessionToken();
        history.push('/auth/login');
    }
}

const getUser = () => {
    return {
        ...JSON.parse(localStorage.getItem('recruiter'))
    }
}

export const Auth = {
    isLoggedIn,
    getSessionToken,
    setSessionToken,
    removeSessionToken,
    redirectIfSessionExpired,
    getUser,
    setUser
}
