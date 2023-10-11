import { Api } from './Api';

const  ENPOINTS = {
    JobTitle: 'job-titles',
};

const getAll = signal => {
    return Api.get(ENPOINTS.JobTitle, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.JobTitle}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.JobTitle, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.JobTitle}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.JobTitle}/${id}`, signal)
}

export const JobTitleService = {
    getAll,
    getById,
    create,
    update,
    destroy
}