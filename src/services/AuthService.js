import { Api } from './Api';

const  ENPOINTS = {
    Login: 'recruiter/login',
    Logout: 'recruiter/logout',
    Register: 'recruiter/register'
};


const login = (payload, signal) => {
    return Api.post(ENPOINTS.Login, payload, signal)
}

const register = (payload, signal) => {
    return Api.post(ENPOINTS.Register, payload, signal)
}

const logout = (payload, signal) => {
    return Api.post(ENPOINTS.Logout, payload, signal)
}


export const AuthService = {
    register,
    login,
    logout
}