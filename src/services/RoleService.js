import { Api } from './Api';

const  ENPOINTS = {
    Role: 'roles',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Role, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Role}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Role, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Role}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Role}/${id}`, signal)
}

export const RoleService = {
    getAll,
    getById,
    create,
    update,
    destroy
}