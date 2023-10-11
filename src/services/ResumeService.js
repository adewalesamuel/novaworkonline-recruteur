import { Api } from './Api';

const  ENPOINTS = {
    Resume: 'resumes',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Resume, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Resume}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Resume, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Resume}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Resume}/${id}`, signal)
}

export const ResumeService = {
    getAll,
    getById,
    create,
    update,
    destroy
}