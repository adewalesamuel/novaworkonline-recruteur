import { Api } from './Api';

const  ENPOINTS = {
    Recruiter: 'recruiter',
};

const getAnalytics = signal => {
    return Api.get(`${ENPOINTS.Recruiter}/analytics`, signal)
}

const getProfile = signal => {
    return Api.get(`${ENPOINTS.Recruiter}/profile`, signal)
}

const getAll = signal => {
    return Api.get(ENPOINTS.Recruiter, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Recruiter}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Recruiter, payload, signal)
}

const update = (payload, signal) => {
    return Api.put(`${ENPOINTS.Recruiter}/profile`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Recruiter}/${id}`, signal)
}

export const RecruiterService = {
    getAnalytics,
    getProfile,
    getAll,
    getById,
    create,
    update,
    destroy
}