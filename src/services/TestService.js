import { Api } from './Api';

const  ENPOINTS = {
    Test: 'tests',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Test, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Test}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Test, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Test}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Test}/${id}`, signal)
}

export const TestService = {
    getAll,
    getById,
    create,
    update,
    destroy
}